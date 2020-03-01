import styled from "styled-components/macro";
import Container from "@material-ui/core/Container";
import { lightBlue } from "@material-ui/core/colors";

export default styled(Container).attrs({ disableGutters: true, maxWidth: false })`
  display: grid;
  grid-template-rows: auto 1fr 120px;
  grid-template-areas:
    "header"
    "body"
    "footer";
  grid-row-gap: 1rem;
  min-height: 100vh;
  font-family: "Lato", sans-serif;
  background: ${lightBlue[200]};

  * {
    box-sizing: border-box;
  }
`;
