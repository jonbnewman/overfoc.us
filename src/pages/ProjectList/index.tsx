import React, { useEffect } from "react";
import { observer } from "mobx-react";
import { useStore } from "mobx-store-provider";
import { IStore } from "state/Store";
import PageInterface from "../PageInterface";
import ProjectDisplay from "./ProjectDisplay";
import Container from "./Container";

function ProjectList({ location }: PageInterface): JSX.Element {
  const store: IStore = useStore();
  useEffect(() => {
    store.setPagePath(location.pathname);
  }, [store, location.pathname]);
  return (
    <Container>
      {store.projects_list.map(project => (
        <ProjectDisplay key={project.name} project={project} />
      ))}
    </Container>
  );
}

export default observer(ProjectList);
