import styled, { css } from 'styled-components/macro';

export const constraint = css`
  width: 100%;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 2rem;
  padding-right: 2rem;
`;

export default styled.div`
  ${constraint}
`;
