import React from "react";
import styled from "styled-components";

const SVG = styled.svg`
  position: absolute;
  width: 0;
  height: 0;
`;

interface EffectFilterInterface {
  children: any;
}

function EffectFilter({ children }: EffectFilterInterface) {
  return (
    <SVG>
      <filter id="effect-filter">{children}</filter>
    </SVG>
  );
}

export default EffectFilter;
