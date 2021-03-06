import React, { useEffect } from "react";
import { observer } from "mobx-react";
import { useStore } from "mobx-store-provider";
import { useTrail } from "react-spring";
import { IStore } from "state/Store";

import EffectFilter from "./EffectFilter";
import EffectArea from "./EffectArea";
import Blob from "./Blob";

/**
 * Credits/disclosure, this effect heavily influenced by:
 * https://www.react-spring.io/docs/hooks/examples
 */

const fast = { tension: 1200, friction: 40 };
const slow = { mass: 10, tension: 200, friction: 50 };
const trans = (x: number, y: number) => `translate3d(${x}px,${y}px,0) translate3d(-50%,-50%,0)`;

function Goo() {
  // @ts-ignore
  const [trail, set] = useTrail(3, () => ({ xy: [0, 0], config: i => (i === 0 ? fast : slow) }));
  const store: IStore = useStore();

  useEffect(() => {
    function mouseMoved(event: MouseEvent) {
      // @ts-ignore
      set({ xy: [event.clientX, event.clientY] });
    }
    document.addEventListener("mousemove", mouseMoved);
    return () => document.removeEventListener("mousemove", mouseMoved);
  }, [set]);

  return (
    <>
      <EffectFilter>
        <feGaussianBlur in="SourceGraphic" stdDeviation="30" />
        <feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 30 -7" />
      </EffectFilter>
      <EffectArea show={store.showBackgroundEffect ? "true" : "false"}>
        {trail.map((props, index) => {
          // @ts-ignore
          return <Blob key={index} style={{ transform: props.xy.interpolate(trans) }} />;
        })}
      </EffectArea>
    </>
  );
}

export default observer(Goo);
