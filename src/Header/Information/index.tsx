import React from "react";
import { useStore } from "mobx-store-provider";
import Button from "@material-ui/core/Button";
import GitHubIcon from "@material-ui/icons/GitHub";
import { IStore } from "../../state/Store";
import Container from "./Container";
import Basic from "./Basic";
import Name from "./Name";
import Email from "./Email";
import Links from "./Links";

function Information() {
  const store: IStore = useStore();
  return (
    <Container>
      <Basic>
        <Name>{store.name}</Name>
        <Email href={`mailto:${store.email}`}>{store.email}</Email>
      </Basic>
      <Links>
        <Button
          variant="contained"
          color="secondary"
          size="large"
          href={store.github}
          target="_blank"
          startIcon={<GitHubIcon />}
        >
          Github
        </Button>
      </Links>
    </Container>
  );
}

export default Information;
