import React from "react";
import { observer } from "mobx-react";
import Container from "./Container";
import Information from "./Information";

function Header() {
  return (
    <Container>
      <Information />
    </Container>
  );
}

export default observer(Header);
