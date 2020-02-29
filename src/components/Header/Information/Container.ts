import styled from "styled-components/macro";
import { constraint } from "components/Constraint";

export default styled.div`
  align-self: center;
  display: grid;
  grid-template-columns: auto 1fr auto;
  grid-template-areas: "info . links";
  ${constraint}
`;
