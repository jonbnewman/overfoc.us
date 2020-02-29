import React, { useEffect } from "react";
import { observer } from "mobx-react";
import { useStore } from "mobx-store-provider";
import { IStore } from "state/Store";

function ProjectList({ location }: any) {
  const store: IStore = useStore();
  useEffect(() => store.setPagePath(location.pathname), [store, location.pathname]);
  return <div>{store.pagePath}</div>;
}

export default observer(ProjectList);
