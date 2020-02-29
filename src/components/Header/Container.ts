import styled from "styled-components/macro";
import { constraint } from "components/Constraint";
import { upTo } from "theme";

export default styled.div`
  align-self: center;
  display: grid;
  grid-template-columns: auto 1fr auto;
  grid-template-areas:
    "info . github"
    ". menu menu";
  ${constraint}

  ${upTo("sm")`
    grid-template-columns: 1fr auto;
    grid-template-areas:
      ". info"
      ". github"
      "menu menu";
  `}
`;
