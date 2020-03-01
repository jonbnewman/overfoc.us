import React, { useEffect } from "react";
import { observer } from "mobx-react";
import { useStore } from "mobx-store-provider";
import { useSpring, animated } from "react-spring";
import theme from "theme";
import ReactMarkdown from "react-markdown";
import { IStore } from "state/Store";
import PageInterface from "../PageInterface";
import LoadingDisplay from "pages/LoadingDisplay";
import MarkdownStyles from "components/MarkdownStyles";
import Paper from "./Paper";

function Home({ location }: PageInterface) {
  const store: IStore = useStore();

  useEffect(() => {
    store.loadMarkdown(require("./contents.md"));
    store.setPagePath(location.pathname);
  }, [store, location.pathname]);

  const [spring, set] = useSpring(() => ({
    opacity: 0,
  }));
  // @ts-ignore
  set({ opacity: 1 });

  return store.isLoading ? (
    <LoadingDisplay />
  ) : (
    <animated.div style={spring}>
      <Paper>
        <MarkdownStyles>
          <ReactMarkdown source={store.loadedMarkdown} />
        </MarkdownStyles>
      </Paper>
    </animated.div>
  );
}

export default observer(Home);
