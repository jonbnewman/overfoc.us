import React from "react";
import styled from "styled-components/macro";
import { NavLink as RouterLink } from "react-router-dom";
import Button, { ButtonProps } from "@material-ui/core/Button";

interface MenuLinkInterface {
  to: string;
  startIcon?: any;
  children: any;
}

function MenuLink(props: MenuLinkInterface) {
  return <Button exact component={RouterLink} {...props} size="small" color="secondary" />;
}

export default styled(MenuLink)`
  && {
    opacity: 0.6;
    font-weight: 600;
    min-width: 0;
    padding-left: 0.5rem;
    padding-right: 0.5rem;

    &:hover {
      opacity: 1;
    }

    &.active {
      opacity: 1;
    }
  }
`;
