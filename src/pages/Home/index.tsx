import React, { useEffect } from "react";
import { observer } from "mobx-react";
import { useStore } from "mobx-store-provider";
import { IStore } from "state/Store";
import PageInterface from "../PageInterface";
import LoadingDisplay from "pages/LoadingDisplay";
import HomePage from "./HomePage";

function Home({ location }: PageInterface) {
  const store: IStore = useStore();

  useEffect(() => {
    store.loadMarkdown(require("./contents.md"));
    store.setPagePath(location.pathname);
  }, [store, location.pathname]);

  return store.isLoading ? <LoadingDisplay /> : <HomePage />;
}

export default observer(Home);
