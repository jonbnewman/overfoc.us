import React from "react";
import ReactMarkdown from "react-markdown";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import CardMedia from "./CardMedia";
import CardActionArea from "./CardActionArea";
import Link from "./Link";

import { IProject } from "state/Project";

interface ProjectDisplayInterface {
  project: IProject;
}

function ProjectDisplay({ project: { name, image, description, github, url } }: ProjectDisplayInterface) {
  return (
    <Card>
      <CardActionArea>
        <Link href={url || github}>
          {image && <CardMedia image={image} title={name} />}
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="div">
              {description.map((desc, id) => (
                <ReactMarkdown source={desc} key={id} />
              ))}
            </Typography>
          </CardContent>
        </Link>
      </CardActionArea>
      <CardActions>
        <Button component={Link} href={github} size="small">
          GitHub
        </Button>
        {url && (
          <Button component={Link} href={url} size="small" color="primary">
            View project
          </Button>
        )}
      </CardActions>
    </Card>
  );
}

export default ProjectDisplay;
