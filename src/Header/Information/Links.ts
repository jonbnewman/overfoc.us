import styled from "styled-components/macro";

export default styled.div`
  grid-area: links;
  align-self: center;
  display: grid;
  grid-template-columns: auto 1fr auto;
  grid-template-areas: basic . links;
`;
