export enum projectStatus {
  active = "active",
  archived = "archived",
}

export const projects = [
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
  projects,
};
