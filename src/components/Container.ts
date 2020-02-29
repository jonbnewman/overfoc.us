import styled from "styled-components/macro";

export default styled.div`
  display: grid;
  grid-template-rows: auto 1fr 120px;
  grid-template-areas:
    "header"
    "body"
    "footer";
  grid-row-gap: 1rem;
  min-height: 100vh;
  font-family: "Lato", sans-serif;

  * {
    box-sizing: border-box;
  }
`;