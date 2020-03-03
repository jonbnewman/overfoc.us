import styled from "styled-components";

interface EffectAreaInterface {
  show: string;
}

export default styled.div<EffectAreaInterface>`
  display: ${({ show }) => (show === "true" ? "block" : "none")};
  position: absolute;
  width: 100%;
  height: 100%;
  filter: url("#effect-filter");
  overflow: hidden;

  & > svg {
    display: none;
  }
`;
