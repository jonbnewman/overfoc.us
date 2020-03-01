import { types, flow, Instance } from "mobx-state-tree";
import { Project } from "./Project";

function getStatusLabel(status: string) {
  return status.charAt(0).toUpperCase() + status.slice(1);
}

function getStatusPath(status: string) {
  return `/projects/${status}`;
}

function getStatus(status: string) {
  return status;
}

function getStatusObject(status: string) {
  return {
    label: getStatusLabel(status),
    path: getStatusPath(status),
    status: getStatus(status),
  };
}

let showBackgroundEffect: any = localStorage.getItem("showBackgroundEffect");
showBackgroundEffect = showBackgroundEffect === null ? true : JSON.parse(showBackgroundEffect);

export const Store = types
  .model({
    name: types.string,
    email: types.string,
    github: types.string,
    build_state: types.string,
    circleci: types.string,
    site_repo: types.string,
    image: types.string,
    projects: types.array(Project),
    pagePath: types.maybeNull(types.string),
    isLoading: false,
    loadedMarkdown: types.array(types.string),
    showBackgroundEffect: types.optional(types.boolean, showBackgroundEffect),
  })
  .views(self => ({
    get project_status_types() {
      return self.projects.reduce((statusTypes: any[], project: any) => {
        if (!statusTypes.find(({ status }) => status === project.status)) {
          statusTypes.push(getStatusObject(project.status));
        }
        return statusTypes;
      }, []);
    },
  }))
  .views(self => ({
    get current_status_type() {
      return self.project_status_types.find(statusType => statusType.path === self.pagePath);
    },
  }))
  .views(self => ({
    get projects_list() {
      return self.projects.filter(project => project.status === self.current_status_type?.status);
    },
  }))
  .actions(self => ({
    toggleBackgroundEffect() {
      self.showBackgroundEffect = !self.showBackgroundEffect;
      localStorage.setItem("showBackgroundEffect", self.showBackgroundEffect ? "true" : "false");
    },
    setPagePath(path: string) {
      self.pagePath = path;
      return self;
    },
    fetchMarkdown: flow(function* fetchMarkdown(path) {
      let markdown: string | null = null;
      try {
        markdown = yield fetch(path).then(response => response.text());
      } catch (error) {
        throw error;
      }
      return markdown;
    }),
    addMarkdown(markdown: string) {
      self.loadedMarkdown.push(markdown);
    },
  }))
  .actions(self => ({
    loadMarkdown: flow(function* loadMarkdown(paths: string[]) {
      if (!self.isLoading) {
        self.isLoading = true;
        const markdownFetches: Promise<any>[] = paths.map(self.fetchMarkdown);
        try {
          const data = yield Promise.all(markdownFetches);
          self.loadedMarkdown = data;
        } catch (error) {
          throw error;
        }
        self.isLoading = false;
      }
      return self.loadedMarkdown;
    }),
  }));

export interface IStore extends Instance<typeof Store> {}
