import styled from "styled-components";
import CardActionArea from "@material-ui/core/CardActionArea";
import { grey } from "@material-ui/core/colors";

export default styled(CardActionArea)`
  && {
    background: ${grey[50]};
  }
`;
