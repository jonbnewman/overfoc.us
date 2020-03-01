export enum projectStatus {
  active = "active",
  archived = "archived",
}

export const projects = [
  {
    name: "mobx-store-provider",
    github: "http://github.com/jonbnewman/mobx-store-provider",
    url: "http://mobx-store-provider.overfoc.us",
    status: projectStatus.active,
    description: [
      "**mobx-store-provider** is a library that provides **React Hooks** to setup and access **mobx-state-tree** models from within **React Function Components**",
    ],
  },
  {
    name: "Footwork",
    github: "https://github.com/footworkjs/footwork",
    url: "http://footworkjs.com",
    image: "/images/projects/footwork.png",
    status: projectStatus.archived,
    description: [
      "Footwork is a frontend framework based on KnockoutJS.",
      "It aims to be fully featured, expressive, and easy to use while remaining as idiomatic and compatible with KnockoutJS as possible.",
    ],
  },
  {
    name: "jQuery Placement",
    github: "https://github.com/jonbnewman/jquery.placement",
    status: projectStatus.archived,
    description: ["jQuery plugin providing an easy way of getting all of an elements layout information."],
  },
  {
    name: "Memoro",
    github: "https://github.com/jonbnewman/Memoro",
    status: projectStatus.archived,
    description: ["An experimental DB abstraction/ORM written in PHP"],
  },
  {
    name: "Despot",
    github: "https://github.com/jonbnewman/Despot",
    status: projectStatus.archived,
    description: ["An experimental PHP web framework"],
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
