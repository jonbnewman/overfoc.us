import styled from "styled-components/macro";

export default styled.div`
  grid-area: info;
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-areas: "image basic";
  grid-column-gap: 1rem;
  padding: 1rem 0;
`;
