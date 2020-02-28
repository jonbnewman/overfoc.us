import styled from 'styled-components/macro';

export default styled.div`
  display: grid;
  grid-template-rows: 80px 1fr 120px;
  grid-template-areas:
    'header'
    'body'
    'footer';
  height: 100vh;
`;
