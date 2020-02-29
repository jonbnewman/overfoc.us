import { types, Instance } from "mobx-state-tree";
import { Project } from "./Project";

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
          const label = status.charAt(0).toUpperCase() + status.slice(1);
          statusTypes.push({
            label,
            path: `/projects/${status}`,
            status: status,
          });
        }
        return statusTypes;
      }, []);
    },
    get current_status_type() {
      const match = self.pagePath?.match(/\/.*\/(.*)$/);
      if (match) {
        return match[1];
      }
      return null;
    },
  }))
  .actions(self => ({
    setPagePath(path: string) {
      self.pagePath = path;
    },
  }));

export interface IStore extends Instance<typeof Store> {}
