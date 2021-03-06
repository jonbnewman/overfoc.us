import styled from "styled-components/macro";
import Container from "@material-ui/core/Container";
import theme from "theme";

export default styled(Container).attrs({ disableGutters: true, maxWidth: false })`
  display: grid;
  grid-template-rows: auto 1fr 120px;
  grid-template-areas:
    "header"
    "body"
    "footer";
  grid-row-gap: ${`${theme.spacing(3)}px`};
  min-height: 100vh;
  font-family: "Lato", sans-serif;

  * {
    box-sizing: border-box;
  }
`;
