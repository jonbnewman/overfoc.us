import styled, { css } from "styled-components/macro";
import Avatar from "@material-ui/core/Avatar";
import { imageSize, upTo, headerCollapseSize } from "theme";

const noDisplay = css`
  display: none;
`;

export default styled(Avatar)`
  grid-area: image;
  align-self: center;

  && {
    width: ${imageSize};
    height: ${imageSize};
    ${upTo(headerCollapseSize, noDisplay)}
  }
`;
