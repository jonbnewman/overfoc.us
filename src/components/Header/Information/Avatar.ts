import styled from "styled-components/macro";
import Avatar from "@material-ui/core/Avatar";
import { imageSize } from "theme";

export default styled(Avatar)`
  grid-area: image;
  align-self: center;

  && {
    width: ${imageSize};
    height: ${imageSize};
  }
`;
