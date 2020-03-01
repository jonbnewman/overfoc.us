import styled from "styled-components/macro";
import Container from "@material-ui/core/Container";
import { constraintSize } from "theme";
import { constraint } from "components/Constraint";

export default styled(Container).attrs({ maxWidth: constraintSize, component: "main" })`
  grid-area: body;
  ${constraint}
`;
