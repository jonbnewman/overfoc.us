import styled from "styled-components/macro";
import { constraint } from "components/Constraint";
import { upTo } from "theme";

export default styled.div`
  align-self: center;
  display: grid;
  grid-template-columns: auto 1fr auto;
  grid-template-areas: "info . links";
  ${constraint}

  ${upTo("sm")`
  grid-template-columns: auto ;
  grid-template-areas:
    "info"
    "links";
  `}
`;
