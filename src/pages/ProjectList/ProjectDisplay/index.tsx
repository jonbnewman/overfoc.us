import React from "react";
import ReactMarkdown from "react-markdown";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import GitHubIcon from "@material-ui/icons/GitHub";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import CardActionArea from "@material-ui/core/CardActionArea";
import Link from "./Link";

import { IProject } from "state/Project";
import MarkdownStyles from "components/MarkdownStyles";
import { Container } from "@material-ui/core";

interface ProjectDisplayInterface {
  project: IProject;
}

function ProjectDisplay({ project: { name, image, description, github, url } }: ProjectDisplayInterface) {
  return (
    <Container disableGutters maxWidth="sm">
      <Card>
        <CardActionArea>
          <Link href={url || github}>
            <MarkdownStyles>
              <Typography gutterBottom variant="h5" component="h2">
                {name}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="div">
                {description.map((desc, id) => (
                  <ReactMarkdown source={desc} key={id} />
                ))}
              </Typography>
            </MarkdownStyles>
          </Link>
        </CardActionArea>
        <CardActions>
          {url && (
            <Button component="a" href={url} endIcon={<KeyboardArrowRightIcon />} variant="contained" color="secondary">
              Project site
            </Button>
          )}
          {github && (
            <Button component="a" startIcon={<GitHubIcon />} href={github}>
              view on GitHub
            </Button>
          )}
        </CardActions>
      </Card>
    </Container>
  );
}

export default ProjectDisplay;
