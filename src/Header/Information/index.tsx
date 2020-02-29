import React from "react";
import { useStore } from "mobx-store-provider";
import Container from "./Container";
import { IStore } from "../../state/Store";

function Information() {
  const store: IStore = useStore();
  return <Container>{store.name}</Container>;
}

export default Information;
