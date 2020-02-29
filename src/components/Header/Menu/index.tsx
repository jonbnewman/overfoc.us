import React from "react";
import { useStore } from "mobx-store-provider";
import { IStore } from "state/Store";
import Container from "./Container";
import MenuLink from "./MenuLink";

function Menu() {
  const store: IStore = useStore();
  const statusTypes = store.projects.reduce((statuses: any[], project: any) => {
    if (!statuses.includes(project.status)) {
      statuses.push(project.status);
    }
    return statuses;
  }, []);
  console.info(statusTypes);
  return (
    <Container>
      <MenuLink to="/">Home</MenuLink>
      {statusTypes.map((statusType: string) => (
        <MenuLink key={statusType} to={statusType}>
          {statusType.charAt(0).toUpperCase() + statusType.slice(1)}
        </MenuLink>
      ))}
    </Container>
  );
}

export default Menu;
