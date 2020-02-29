import React from "react";
import { useStore } from "mobx-store-provider";
import { IStore } from "state/Store";
import Container from "./Container";
import MenuLink from "./MenuLink";

function Menu() {
  const store: IStore = useStore();
  return (
    <Container>
      <MenuLink to="/">Home</MenuLink>
      {store.project_status_types.map((statusType: string) => (
        <MenuLink key={statusType} to={statusType}>
          {statusType.charAt(0).toUpperCase() + statusType.slice(1)}
        </MenuLink>
      ))}
    </Container>
  );
}

export default Menu;
