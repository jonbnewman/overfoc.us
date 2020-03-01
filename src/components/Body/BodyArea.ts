import styled from "styled-components/macro";
import Container from "@material-ui/core/Container";
import { constraintSize } from "theme";

export default styled(Container).attrs({ maxWidth: constraintSize, component: "main" })`
  grid-area: body;
`;
