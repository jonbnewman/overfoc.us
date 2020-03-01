import styled from "styled-components";
import Link from "@material-ui/core/Link";
import theme from "theme";

export default styled(Link)`
  padding: ${`${theme.spacing(2)}px`};
  display: block;

  && {
    &:hover {
      text-decoration: none;
    }
  }
`;
