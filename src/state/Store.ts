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
  })
  .views(self => ({
    get project_status_types() {
      return self.projects.reduce((statuses: any[], project: any) => {
        if (!statuses.includes(project.status)) {
          statuses.push(project.status);
        }
        return statuses;
      }, []);
    },
  }));

export interface IStore extends Instance<typeof Store> {}
