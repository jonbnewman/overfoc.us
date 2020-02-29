import React from "react";
import { Link } from "@material-ui/core";
import { useStore } from "mobx-store-provider";
import { IStore } from "state/Store";
import Content from "./Content";
import Container from "./Container";
import GithubLink from "./GithubLink";

function Footer() {
  const store: IStore = useStore();
  return (
    <Container>
      <Content>
        <Link href={store.circleci}>
          <img alt="Latest CircleCI build status" src={store.build_state} />
        </Link>
        <GithubLink href={store.github}>view on Github</GithubLink>
      </Content>
    </Container>
  );
}

export default Footer;
