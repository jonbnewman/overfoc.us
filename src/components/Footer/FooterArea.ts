import styled from "styled-components/macro";
import { headerFooterBg, lineColor } from "theme";

export default styled.footer`
  grid-area: footer;
  background: ${headerFooterBg};
  border-top: ${`1px solid ${lineColor}`};
`;
