import { types, Instance } from "mobx-state-tree";

export const Project = types.model({
  name: types.string,
  github: types.maybe(types.string),
  image: types.maybe(types.string),
  status: types.string,
  description: types.array(types.string),
});

export interface IProject extends Instance<typeof Project> {}
