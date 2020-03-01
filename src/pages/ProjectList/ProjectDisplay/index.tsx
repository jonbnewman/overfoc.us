import React from "react";
import ReactMarkdown from "react-markdown";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import GitHubIcon from "@material-ui/icons/GitHub";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import Typography from "@material-ui/core/Typography";
import CardActionArea from "@material-ui/core/CardActionArea";

import { IProject } from "state/Project";
import MarkdownStyles from "components/MarkdownStyles";
import Link from "./Link";
import CardActions from "./CardActions";
import Button from "./Button";

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
          {github && (
            <Button component="a" area="github" startIcon={<GitHubIcon />} href={github} variant="contained">
              view on GitHub
            </Button>
          )}
          {url && (
            <Button
              component="a"
              area="project"
              href={url}
              endIcon={<KeyboardArrowRightIcon />}
              variant="contained"
              color="secondary"
            >
              Project site
            </Button>
          )}
        </CardActions>
      </Card>
    </Container>
  );
}

export default ProjectDisplay;
