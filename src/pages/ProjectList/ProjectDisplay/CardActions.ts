import styled from "styled-components";
import CardActions from "@material-ui/core/CardActions";
import theme from "theme";

export default styled(CardActions)`
  && {
    padding: ${`${theme.spacing(1)}px`};
    display: grid;
    grid-template-columns: auto 1fr auto;
    grid-template-areas: "github . project";
    grid-column-gap: ${`${theme.spacing(1)}px`};
  }
`;
