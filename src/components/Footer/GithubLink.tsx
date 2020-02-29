import React from "react";
import Chip from "@material-ui/core/Chip";
import GitHubIcon from "@material-ui/icons/GitHub";

interface GithubLinkInterface {
  href: string;
}

function GithubLink({ href }: GithubLinkInterface) {
  return <Chip component="a" href={href} icon={<GitHubIcon />} label="view on GitHub" clickable />;
}

export default GithubLink;
