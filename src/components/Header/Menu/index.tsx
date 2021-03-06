import React from "react";
import { useStore } from "mobx-store-provider";
import HomeIcon from "@material-ui/icons/Home";
import { IStore } from "state/Store";
import Container from "./Container";
import MenuLink from "./MenuLink";

function Menu() {
  const store: IStore = useStore();
  return (
    <Container>
      <MenuLink to="/">
        <HomeIcon />
      </MenuLink>
      {store.project_status_types.map((statusType: any) => (
        <MenuLink key={statusType.status} to={statusType.path}>
          {statusType.label}
        </MenuLink>
      ))}
    </Container>
  );
}

export default Menu;
