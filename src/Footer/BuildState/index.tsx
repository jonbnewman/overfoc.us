import React from "react";
import Container from "./Container";
import Column from "./Column";

interface BuildStateInterface {
  src: string;
}

function BuildState({ src }: BuildStateInterface) {
  return (
    <Container>
      <Column>Latest build</Column>
      <Column>
        <img alt="Latest CircleCI build" src={src} />
      </Column>
    </Container>
  );
}

export default BuildState;
