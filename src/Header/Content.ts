import styled from "styled-components/macro";
import { constraint } from "../Constraint";
import { headerPadding } from "../theme";

export default styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-areas: "image information";
  grid-column-gap: 1rem;
  padding: ${headerPadding} 0;
  ${constraint};
`;
