import styled from "styled-components/macro";
import { lineColor } from "theme";

export default styled.div`
  grid-area: menu;
  border: 1px solid ${lineColor};
  justify-self: end;
  border-bottom-width: 0;
  border-radius: 0.25rem 0.25rem 0 0;
`;
