import styled from "styled-components/macro";
import Container from "@material-ui/core/Container";
import { constraintSize } from "theme";

export default styled(Container).attrs({ maxWidth: constraintSize })`
  padding-top: 1rem;
  display: grid;
  grid-template-columns: auto 1fr auto;
  grid-template-areas: "controls . github";
`;
