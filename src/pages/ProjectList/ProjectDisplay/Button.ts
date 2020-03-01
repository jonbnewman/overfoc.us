import styled from "styled-components";
import Button, { ButtonProps } from "@material-ui/core/Button";

interface ButtonAreaInterface {
  area: string;
  component: any;
}

export default styled(Button)<ButtonAreaInterface & ButtonProps>`
  grid-area: ${({ area }: any) => area};
`;
