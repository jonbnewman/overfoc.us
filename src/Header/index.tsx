import React from "react";
import { observer } from "mobx-react";
import { useStore } from "mobx-store-provider";
import { IStore } from "../state/Store";
import Content from "./Content";
import Container from "./Container";
import Information from "./Information";
import Avatar from "./Avatar";

function Header() {
  const store: IStore = useStore();
  return (
    <Container>
      <Content>
        <Avatar alt={store.name} src={store.image} />
        <Information />
      </Content>
    </Container>
  );
}

export default observer(Header);
