import React from "react";
import { useStore } from "mobx-store-provider";
import { IStore } from "../../state/Store";
import Container from "./Container";
import Grid from "./Grid";
import Name from "./Name";
import Email from "./Email";

function Information() {
  const store: IStore = useStore();
  return (
    <Container>
      <Grid>
        <Name>{store.name}</Name>
        <Email href={`mailto:${store.email}`}>{store.email}</Email>
      </Grid>
    </Container>
  );
}

export default Information;
