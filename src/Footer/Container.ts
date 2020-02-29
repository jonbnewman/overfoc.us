import styled from "styled-components/macro";
import { grey } from "@material-ui/core/colors";
import { headerFooterBg } from "../theme";

export default styled.div`
  grid-area: footer;
  background: ${headerFooterBg};
  border-top: 1px solid ${grey[400]};
`;
