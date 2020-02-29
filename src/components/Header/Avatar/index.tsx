import React from "react";
import { useStore } from "mobx-store-provider";
import { IStore } from "state/Store";

import ImageAvatar from "./ImageAvatar";
import LinkAvatar from "./LinkAvatar";
import Container from "./Container";

function Avatar() {
  const store: IStore = useStore();
  return (
    <Container>
      <ImageAvatar alt={store.name} src={store.image} />
      <LinkAvatar alt={store.name} src={store.image} github={store.github} />
    </Container>
  );
}

export default Avatar;
