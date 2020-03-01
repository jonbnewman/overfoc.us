import React from "react";
import { observer } from "mobx-react";
import Link from "@material-ui/core/Link";
import Chip from "@material-ui/core/Chip";
import GitHubIcon from "@material-ui/icons/GitHub";
import Switch from "@material-ui/core/Switch";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { useStore } from "mobx-store-provider";
import { IStore } from "state/Store";
import Content from "./Content";
import FooterArea from "./FooterArea";
import GithubArea from "./GithubArea";
import ControlsArea from "./ControlsArea";

function Footer() {
  const store: IStore = useStore();
  return (
    <FooterArea>
      <Content>
        <ControlsArea>
          <FormControlLabel
            label="Background effect"
            control={
              <Switch
                checked={store.showBackgroundEffect}
                onClick={store.toggleBackgroundEffect}
                color="primary"
                inputProps={{ "aria-label": "Show background effect" }}
              />
            }
          />
        </ControlsArea>
        <GithubArea>
          <div>
            <Chip component="a" href={store.site_repo} icon={<GitHubIcon />} label="view on GitHub" clickable />
          </div>
          <div>
            <Link href={store.circleci}>
              <img alt="Latest CircleCI build status" src={store.build_state} />
            </Link>
          </div>
        </GithubArea>
      </Content>
    </FooterArea>
  );
}

export default observer(Footer);
