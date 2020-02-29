import styled from "styled-components/macro";
import { grey } from "@material-ui/core/colors";
import { headerFooterBg } from "theme";
import { constraint } from "components/Constraint";

export default styled.div`
  grid-area: header;
  background: ${headerFooterBg};
  border-bottom: 1px solid ${grey[400]};
`;
