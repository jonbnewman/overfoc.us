import styled from "styled-components";
import { animated } from "react-spring";
import chroma from "chroma-js";
import { secondaryMain } from "theme";

const blobColor = chroma(secondaryMain);

export default animated<any>(styled.div`
  position: absolute;
  will-change: transform;
  border-radius: 50%;
  box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
  opacity: 0.6;

  &:nth-child(1) {
    width: 120px;
    height: 120px;
    background: ${blobColor.brighten(3).hex()};
  }

  &:nth-child(2) {
    width: 250px;
    height: 250px;
    background: ${blobColor.brighten(2).hex()};
  }

  &:nth-child(3) {
    width: 150px;
    height: 150px;
    background: ${blobColor.brighten(4).hex()};
  }

  &::after {
    content: "";
    position: absolute;
    top: 20px;
    left: 20px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.8);
  }

  &:nth-child(2)::after {
    top: 70px;
    left: 70px;
    width: 70px;
    height: 70px;
  }
  &:nth-child(3)::after {
    top: 50px;
    left: 50px;
    width: 50px;
    height: 50px;
  }
`);
