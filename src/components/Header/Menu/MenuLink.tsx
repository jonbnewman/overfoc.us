import React from "react";
import styled from "styled-components/macro";
import { Link as RouterLink } from "react-router-dom";
import Link from "@material-ui/core/Link";
import Button from "@material-ui/core/Button";

interface MenuLinkInterface {
  to: string;
  children?: any;
}

function MenuLink(props: MenuLinkInterface) {
  return <Button component={RouterLink} {...props} />;
}

export default styled(MenuLink)`
  padding: 0.25rem 0.5rem;
  display: block;
`;
