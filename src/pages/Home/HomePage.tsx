import React from "react";
import { useTrail, animated, config } from "react-spring";
import { useStore } from "mobx-store-provider";
import ReactMarkdown from "react-markdown";
import Container from "@material-ui/core/Container";
import { IStore } from "state/Store";
import theme from "theme";
import MarkdownStyles from "components/MarkdownStyles";
import Paper from "./Paper";

function HomePage() {
  const store: IStore = useStore();

  const [trail, set] = useTrail(store.loadedMarkdown.length, () => ({
    config: config.wobbly,
    opacity: 0,
    transform: `translate3d(0px, ${theme.spacing(2)}px, 0px)`,
  }));
  // @ts-ignore
  set({ opacity: 1, transform: `translate3d(0px, 0px, 0px)` });

  return (
    <Container disableGutters maxWidth="sm">
      <MarkdownStyles>
        {trail.map((animation, index) => (
          <animated.div style={animation} key={index}>
            <Paper>
              <ReactMarkdown source={store.loadedMarkdown[index]} />
            </Paper>
          </animated.div>
        ))}
      </MarkdownStyles>
    </Container>
  );
}

export default HomePage;
