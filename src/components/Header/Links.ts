import styled from "styled-components/macro";
import { upTo } from "theme";
import { imageSize } from "theme";

export default styled.div`
  grid-area: links;
  align-self: center;

  ${upTo("sm")`
    padding-left: calc(${imageSize} + 1rem);
    padding-bottom: 1rem;
  `}
`;
