import styled from "styled-components";
import Button from "@material-ui/core/Button";

interface ButtonAreaInterface {
  area: string;
  component: any;
}

export default styled(Button)<ButtonAreaInterface>`
  grid-area: ${({ area }: any) => area};
`;
