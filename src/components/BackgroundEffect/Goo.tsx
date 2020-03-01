import React, { useEffect } from "react";
import { useTrail, animated } from "react-spring";
import styled from "styled-components";

/**
 * This effect was directly lifted from:
 * https://www.react-spring.io/docs/hooks/examples
 */
import { secondaryMain } from "theme";
import chroma from "chroma-js";

const Styles = styled.div`
  height: 100vh;
  width: 100vw;

  .hooks-main > svg {
    display: none;
  }

  .hooks-main > div {
    position: absolute;
    will-change: transform;
    border-radius: 50%;
    background: ${chroma(secondaryMain)
      .brighten()
      .hex()};
    box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
    opacity: 0.6;
  }

  .hooks-main > div:nth-child(1) {
    width: 120px;
    height: 120px;
  }

  .hooks-main > div:nth-child(2) {
    width: 250px;
    height: 250px;
  }

  .hooks-main > div:nth-child(3) {
    width: 150px;
    height: 150px;
  }

  .hooks-main > div::after {
    content: "";
    position: absolute;
    top: 20px;
    left: 20px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.8);
  }

  .hooks-main > div:nth-child(2)::after {
    top: 70px;
    left: 70px;
    width: 70px;
    height: 70px;
  }

  .hooks-main > div:nth-child(3)::after {
    top: 50px;
    left: 50px;
    width: 50px;
    height: 50px;
  }

  .hooks-main {
    position: absolute;
    width: 100%;
    height: 100%;
    filter: url("#goo");
    overflow: hidden;
  }
`;

const fast = { tension: 1200, friction: 40 };
const slow = { mass: 10, tension: 200, friction: 50 };
const trans = (x: number, y: number) => `translate3d(${x}px,${y}px,0) translate3d(-50%,-50%,0)`;

function Goo() {
  // @ts-ignore
  const [trail, set] = useTrail(3, () => ({ xy: [0, 0], config: i => (i === 0 ? fast : slow) }));

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
    <Styles>
      <svg style={{ position: "absolute", width: 0, height: 0 }}>
        <filter id="goo">
          <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="30" />
          <feColorMatrix in="blur" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 30 -7" />
        </filter>
      </svg>
      <div className="hooks-main">
        {trail.map((props, index) => {
          // @ts-ignore
          return <animated.div key={index} style={{ transform: props.xy.interpolate(trans) }} />;
        })}
      </div>
    </Styles>
  );
}

export default Goo;
