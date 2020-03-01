import styled from "styled-components";
import Link from "@material-ui/core/Link";

export default styled(Link)`
  && {
    color: black;
    &:hover {
      text-decoration: none;
    }
  }
`;
