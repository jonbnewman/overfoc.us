import React from "react";
import { Link } from "@material-ui/core";
import { useStore } from "mobx-store-provider";
import { IStore } from "state/Store";
import Container from "./Container";
import Column from "./Column";

interface BuildStateInterface {
  src: string;
}

function BuildState({ src }: BuildStateInterface) {
  const store: IStore = useStore();
  return (
    <Container>
      <Column>
        <Link href={store.circleci}>
          <img alt="Latest CircleCI build" src={src} />
        </Link>
      </Column>
    </Container>
  );
}

export default BuildState;
