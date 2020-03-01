import React, { useEffect } from "react";
import { observer } from "mobx-react";
import { useStore } from "mobx-store-provider";
import { useTrail, animated } from "react-spring";
import theme from "theme";
import { IStore } from "state/Store";
import PageInterface from "../PageInterface";
import ProjectDisplay from "./ProjectDisplay";
import Container from "./Container";

function ProjectList({ location }: PageInterface): JSX.Element {
  const store: IStore = useStore();

  useEffect(() => {
    store.setPagePath(location.pathname);
  }, [store, location.pathname]);

  const [trail, set] = useTrail(store.projects_list.length, () => ({
    opacity: 0,
    transform: `translate3d(0px, ${theme.spacing(2)}px, 0px)`,
  }));
  // @ts-ignore
  set({ opacity: 1, transform: `translate3d(0px, 0px, 0px)` });

  return (
    <Container>
      {trail.map((animation, index) => (
        <animated.div style={animation} key={index}>
          <ProjectDisplay project={store.projects_list[index]} />
        </animated.div>
      ))}
    </Container>
  );
}

export default observer(ProjectList);
