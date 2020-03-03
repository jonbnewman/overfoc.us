import React, { useEffect } from "react";
import { observer } from "mobx-react";
import { useStore } from "mobx-store-provider";
import { useTrail } from "react-spring";
import { IStore } from "state/Store";

import { BackgroundEffectInterface } from "../index";
import Blob from "./Blob";
import EffectArea from "./EffectArea";
import Children from "./Children";
import FilterSVG from "./FilterSVG";

/**
 * Credits/disclosure, this effect is a slightly
 * modified copy of:
 * https://www.react-spring.io/docs/hooks/examples
 */

const fast = { tension: 1200, friction: 40 };
const slow = { mass: 10, tension: 200, friction: 50 };
const trans = (x: number, y: number) => `translate3d(${x}px,${y}px,0) translate3d(-50%,-50%,0)`;

function Goo({ children }: BackgroundEffectInterface) {
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

  // @ts-ignore
  return (
    <>
      <FilterSVG>
        <filter id="goo">
          <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="30" />
          <feColorMatrix in="blur" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 30 -7" />
        </filter>
      </FilterSVG>
      <EffectArea show={store.showBackgroundEffect ? "true" : "false"}>
        {trail.map((props, index) => {
          // @ts-ignore
          return <Blob key={index} style={{ transform: props.xy.interpolate(trans) }} />;
        })}
      </EffectArea>
      <Children>{children}</Children>
    </>
  );
}

export default observer(Goo);
