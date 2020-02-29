import styled from "styled-components/macro";
import { constraint } from "components/Constraint";
import { upTo, headerCollapseSize } from "theme";

export default styled.div`
  align-self: center;
  display: grid;
  grid-template-columns: auto 1fr auto;
  grid-template-rows: 1fr auto;
  grid-template-areas:
    "info . github"
    "info menu menu";
  ${constraint}

  ${upTo(headerCollapseSize)`
    grid-template-columns: 1fr auto;
    grid-template-areas:
      ". info"
      ". github"
      "menu menu";
  `}
`;
