import React, { PropsWithChildren } from "react";
import LandingBackgroundImage from "#/assets/background.jpg";

type ComponentProps = PropsWithChildren<{}>;

export default function Component(props: ComponentProps) {
  return (
    <img
      src={LandingBackgroundImage}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        objectFit: "cover",
        zIndex: -1,
      }}
    ></img>
  );
}
