import * as React from "react";
import { MediaSwitch } from "../MediaSwitch";

export function MediaToggle(props: {
  breakpoint: number;
  narrow: React.ReactElement<{}>;
  wide: React.ReactElement<{}>;
  children?: React.ReactNode;
}) {
  return (
    <MediaSwitch
      cases={[
        { query: `(min-width: ${props.breakpoint + 1}px)`, element: props.wide },
        { query: `(max-width: ${props.breakpoint}px)`, element: props.narrow }
      ]}
    >
      {props.children}
    </MediaSwitch>
  );
}
