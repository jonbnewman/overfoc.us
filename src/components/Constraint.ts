import styled, { css } from "styled-components/macro";
import { constraintSize } from "theme";

export const constraint = css`
  width: 100%;
  max-width: ${constraintSize};
  margin-left: auto;
  margin-right: auto;
  padding-left: 2rem;
  padding-right: 2rem;
`;

export default styled.div`
  ${constraint}
`;
