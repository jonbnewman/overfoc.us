import React from "react";
import Link from "@material-ui/core/Link";
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
        <GithubLink href={store.github} />
        <Link href={store.circleci}>
          <img alt="Latest CircleCI build status" src={store.build_state} />
        </Link>
      </Content>
    </Container>
  );
}

export default Footer;
