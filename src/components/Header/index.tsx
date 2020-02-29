import React from "react";
import { useStore } from "mobx-store-provider";
import Button from "@material-ui/core/Button";
import GitHubIcon from "@material-ui/icons/GitHub";

import { IStore } from "state/Store";

import HeaderArea from "./HeaderArea";
import Container from "./Container";
import Info from "./Info";
import Name from "./Name";
import Email from "./Email";
import Github from "./Github";
import Basic from "./Basic";
import Avatar from "./Avatar";
import Menu from "./Menu";

function Header() {
  const store: IStore = useStore();
  return (
    <HeaderArea>
      <Container>
        <Info>
          <Avatar alt={store.name} src={store.image} />
          <Basic>
            <Name>{store.name}</Name>
            <Email href={`mailto:${store.email}`}>{store.email}</Email>
          </Basic>
        </Info>
        <Github>
          <Button variant="contained" color="secondary" size="large" href={store.github} startIcon={<GitHubIcon />}>
            Github
          </Button>
        </Github>
        <Menu />
      </Container>
    </HeaderArea>
  );
}

export default Header;
