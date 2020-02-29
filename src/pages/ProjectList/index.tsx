import React, { useEffect } from "react";
import { observer } from "mobx-react";
import { useStore } from "mobx-store-provider";
import { IStore } from "state/Store";
import PageInterface from "../PageInterface";

function ProjectList({ location }: PageInterface) {
  const store: IStore = useStore();
  useEffect(() => store.setPagePath(location.pathname), [store, location.pathname]);
  return <pre>{JSON.stringify(store.current_status, null, 2)}</pre>;
}

export default observer(ProjectList);
