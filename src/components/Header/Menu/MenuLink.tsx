import React from "react";
import styled from "styled-components/macro";
import { NavLink as RouterLink } from "react-router-dom";
import Button from "@material-ui/core/Button";

interface MenuLinkInterface {
  to: string;
  startIcon?: any;
  children: any;
}

function MenuLink(props: MenuLinkInterface) {
  return <Button exact component={RouterLink} {...props} size="small" variant="contained" color="secondary" />;
}

export default styled(MenuLink)`
  && {
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    opacity: 0.6;

    &:hover {
      opacity: 1;
    }

    &.active {
      opacity: 1;
    }
  }
`;
