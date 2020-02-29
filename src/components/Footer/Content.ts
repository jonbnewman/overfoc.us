import styled from "styled-components/macro";
import { constraint } from "components/Constraint";

export default styled.div`
  padding-top: 1rem;
  text-align: right;
  display: grid;
  grid-auto-flow: row;
  grid-row-gap: 0.5rem;
  ${constraint}
`;
