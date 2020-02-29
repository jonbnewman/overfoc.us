export enum projectStatus {
  active = "active",
  archived = "archived",
}

export const projects = [
  {
    name: "mobx-store-provider",
    github: "http://github.com/jonbnewman/mobx-store-provider",
    status: projectStatus.active,
    description: [
      "**mobx-store-provider** is a library that provides [React Hooks](https://reactjs.org/docs/hooks-intro.html) to setup and access [mobx-state-tree](http://mobx-state-tree.js.org/) models from within [React Function Components](https://www.robinwieruch.de/react-function-component)",
    ],
  },
  {
    name: "Footwork",
    github: "https://github.com/footworkjs/footwork",
    image: "/images/projects/footwork.png",
    status: projectStatus.archived,
    description: [
      "Footwork is a frontend framework based on KnockoutJS.",
      "It aims to be fully featured, expressive, and easy to use while remaining as idiomatic and compatible with KnockoutJS as possible.",
    ],
  },
];

export const appState = {
  name: "Jonathan Newman",
  email: "jbnewm@gmail.com",
  github: "https://github.com/jonbnewman",
  image: "/images/face.jpg",
  build_state: "https://circleci.com/gh/jonbnewman/overfoc.us.svg?style=svg",
  circleci: "https://circleci.com/gh/jonbnewman/overfoc.us",
  site_repo: "https://github.com/jonbnewman/overfoc.us",
  projects,
};
