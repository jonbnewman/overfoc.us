import React, { useEffect } from "react";
import { observer } from "mobx-react";
import { useStore } from "mobx-store-provider";
import { IStore } from "state/Store";
import PageInterface from "../PageInterface";

function ProjectList({ location }: PageInterface) {
  const store: IStore = useStore();
  useEffect(() => store.setPagePath(location.pathname), [store, location.pathname]);
  return <div>{store.current_project?.name}</div>;
}

export default observer(ProjectList);
