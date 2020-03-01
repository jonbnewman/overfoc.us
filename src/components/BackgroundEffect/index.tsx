import React from "react";
import Goo from "./Goo";

export interface BackgroundEffectInterface {
  children?: any;
}

const effects = [Goo];

function BackgroundEffect(props: BackgroundEffectInterface) {
  const Effect = effects[Math.floor(Math.random() * effects.length)];
  return <Effect {...props} />;
}

export default BackgroundEffect;
