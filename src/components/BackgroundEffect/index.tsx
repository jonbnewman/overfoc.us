import React from "react";
import { observer } from "mobx-react";

import Goo from "./Goo";
import { useStore } from "mobx-store-provider";
import { IStore } from "state/Store";

const effects = [Goo];

function BackgroundEffect() {
  const store: IStore = useStore();
  const Effect = effects[Math.floor(Math.random() * effects.length)];
  return store.showBackgroundEffect ? <Effect /> : null;
}

export default observer(BackgroundEffect);
