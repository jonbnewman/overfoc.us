import React from "react";
import BodyArea from "./BodyArea";

interface BodyInterface {
  children: any;
}

function Body({ children }: BodyInterface) {
  return <BodyArea>{children}</BodyArea>;
}

export default Body;
