import React from "react";
import Svg from "./svg";

const Icon = (props) => (
  <Svg
    viewBox={props.viewBox || "0 0 24 24"}
    width={props.width}
    height={props.height}
    fill={props.fill}
  >
    <g>
      {props.d.map((value) => (
        <path key={value} d={value}></path>
      ))}
    </g>
  </Svg>
);

export default Icon;