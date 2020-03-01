import React from "react";
import { useSpring, animated } from "react-spring";
import { useStore } from "mobx-store-provider";
import ReactMarkdown from "react-markdown";
import { IStore } from "state/Store";
import MarkdownStyles from "components/MarkdownStyles";
import Paper from "./Paper";

function HomePage() {
  const store: IStore = useStore();
  const [spring, set] = useSpring(() => ({
    opacity: 0,
  }));
  // @ts-ignore
  set({ opacity: 1 });

  return (
    <animated.div style={spring}>
      <Paper>
        <MarkdownStyles>
          <ReactMarkdown source={store.loadedMarkdown} />
        </MarkdownStyles>
      </Paper>
    </animated.div>
  );
}

export default HomePage;
