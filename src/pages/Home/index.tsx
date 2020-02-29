import React, { useEffect } from "react";
import { useStore } from "mobx-store-provider";
import { IStore } from "state/Store";
import PageInterface from "../PageInterface";

function Home({ location }: PageInterface) {
  const store: IStore = useStore();
  useEffect(() => store.setPagePath(location.pathname), [store, location.pathname]);
  return <div>Home</div>;
}

export default Home;
