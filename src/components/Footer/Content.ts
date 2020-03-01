import styled from "styled-components/macro";
import Container from "@material-ui/core/Container";
import { constraintSize } from "theme";

export default styled(Container).attrs({ maxWidth: constraintSize })`
  padding-top: 1rem;
  text-align: right;
  display: grid;
  grid-auto-flow: row;
  grid-row-gap: 0.5rem;
`;
