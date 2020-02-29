import React from "react";
import { useStore } from "mobx-store-provider";
import { IStore } from "state/Store";
import Content from "./Content";
import Container from "./Container";
import BuildState from "./BuildState";

function Footer() {
  const store: IStore = useStore();
  return (
    <Container>
      <Content>
        <BuildState src={store.build_state} />
      </Content>
    </Container>
  );
}

export default Footer;
