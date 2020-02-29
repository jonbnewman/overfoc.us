import { types, Instance } from "mobx-state-tree";
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
  })
  .views(self => ({
    get project_status_types() {
      return self.projects.reduce((statusTypes: any[], { status }: any) => {
        if (!statusTypes.find(({ statusType }) => statusType === status)) {
          statusTypes.push(getStatusObject(status));
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
    setPagePath(path: string) {
      self.pagePath = path;
    },
  }));

export interface IStore extends Instance<typeof Store> {}
