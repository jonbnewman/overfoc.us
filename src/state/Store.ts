import { types, Instance } from "mobx-state-tree";
import { Project } from "./Project";

export const Store = types.model({
  name: types.string,
  email: types.string,
  github: types.string,
  build_state: types.string,
  image: types.string,
  projects: types.array(Project),
});

export interface IStore extends Instance<typeof Store> {}
