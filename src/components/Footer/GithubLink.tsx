import React from "react";
import styled from "styled-components/macro";
import Chip from "@material-ui/core/Chip";
import GitHubIcon from "@material-ui/icons/GitHub";
import Link from "@material-ui/core/Link";

const GLink = styled(Link)`
  display: block;
  line-height: 24px;
  && {
    font-size: 0.9rem;
    margin: 0.25rem 0;
    &:hover {
      text-decoration: none;
    }
  }
`;

interface GithubLinkInterface {
  href: string;
}

function GithubLink({ href }: GithubLinkInterface) {
  return (
    <GLink href={href}>
      <Chip size="small" icon={<GitHubIcon />} label="view on GitHub" clickable color="secondary" />
    </GLink>
  );
}

export default GithubLink;
