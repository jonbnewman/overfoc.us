import React from "react";
import Goo from "./Goo";

const effects = [Goo];

function BackgroundEffect() {
  var Effect = effects[Math.floor(Math.random() * effects.length)];
  return <Effect />;
}

export default BackgroundEffect;
