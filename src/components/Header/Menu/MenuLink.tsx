import React from "react";
import { Link as RouterLink } from "react-router-dom";
import Link from "@material-ui/core/Link";

interface MenuLinkInterface {
  to: string;
  children?: any;
}

function MenuLink(props: MenuLinkInterface) {
  return <Link component={RouterLink} {...props} />;
}

export default MenuLink;
