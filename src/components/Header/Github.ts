import styled from "styled-components/macro";
import { upTo, headerCollapseSize } from "theme";

export default styled.div`
  grid-area: github;
  align-self: center;

  ${upTo(headerCollapseSize)`
    justify-self: end;
    padding-bottom: 1rem;
  `}
`;
