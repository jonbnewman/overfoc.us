import React from "react";
import styled, { css } from "styled-components/macro";
import Badge from "@material-ui/core/Badge";
import Avatar from "@material-ui/core/Avatar";
import GitHubIcon from "@material-ui/icons/GitHub";
import { imageSize, headerCollapseSize, downTo } from "theme";
import { Link } from "@material-ui/core";

const noDisplay = css`
  display: none;
`;

const Container = styled.div`
  grid-area: image;
  align-self: center;
  ${downTo(headerCollapseSize, noDisplay)}
`;

const ImageAvatar = styled(Avatar)`
  && {
    width: ${imageSize};
    height: ${imageSize};
  }
`;

const Image = styled.img`
  border-radius: 24px;
  border: 3px solid white;
  &:hover {
    box-shadow: 0 1px 3px -1px black;
  }
  &:active {
    box-shadow: none;
  }
`;

interface LinkAvatarInterface {
  alt: string;
  src: string;
  github: string;
}

function LinkAvatar({ alt, src, github }: LinkAvatarInterface) {
  return (
    <Container>
      <Badge
        overlap="circle"
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        badgeContent={
          <Link href={github}>
            <Image alt="Github" title="View my GitHub" src="/images/github.png" />
          </Link>
        }
      >
        <ImageAvatar alt={alt} src={src} />
      </Badge>
    </Container>
  );
}

export default LinkAvatar;
