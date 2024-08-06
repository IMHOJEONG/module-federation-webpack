import React, { PropsWithChildren } from "react";
import MainArchitecture from "#/assets/mainArchitecture.png";

type ComponentProps = PropsWithChildren<{}>;

export default function Component(props: ComponentProps) {
  const { children, ...others } = props;
  return (
    <figure>
      <img {...others} src={MainArchitecture}>
        {children}
      </img>
      <figcaption>Module federation Architecture</figcaption>
    </figure>
  );
}
