import styled from "styled-components/macro";
import Container from "@material-ui/core/Container";
import { upTo, headerCollapseSize, constraintSize } from "theme";

export default styled(Container).attrs({ maxWidth: constraintSize })`
  display: grid;
  grid-template-columns: auto 1fr auto;
  grid-template-rows: 1fr auto;
  grid-template-areas:
    "info . github"
    "info menu menu";

  ${upTo(headerCollapseSize)`
    grid-template-columns: 1fr auto;
    grid-template-areas:
      ". info"
      ". github"
      "menu menu";
  `}
`;
