import { types, Instance } from 'mobx-state-tree';

export const Store = types.model({
  name: 'Jonathan Newman',
  email: 'jbnewm@gmail.com',
  github: 'https://github.com/jonbnewman',
  image: '/images/face.jpg',
});

export interface IStore extends Instance<typeof Store> {}
