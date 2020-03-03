import styled from "styled-components/macro";
import { headerFooterBg, lineColor } from "theme";

export default styled.header`
  grid-area: header;
  background: ${headerFooterBg};
  border-bottom: ${`1px solid ${lineColor}`};
`;
