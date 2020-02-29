import React from "react";
import Link from "@material-ui/core/Link";
import Chip from "@material-ui/core/Chip";
import GitHubIcon from "@material-ui/icons/GitHub";
import { useStore } from "mobx-store-provider";
import { IStore } from "state/Store";
import Content from "./Content";
import FooterArea from "./FooterArea";

function Footer() {
  const store: IStore = useStore();
  return (
    <FooterArea>
      <Content>
        <div>
          <Chip component="a" href={store.site_repo} icon={<GitHubIcon />} label="view on GitHub" clickable />
        </div>
        <div>
          <Link href={store.circleci}>
            <img alt="Latest CircleCI build status" src={store.build_state} />
          </Link>
        </div>
      </Content>
    </FooterArea>
  );
}

export default Footer;
