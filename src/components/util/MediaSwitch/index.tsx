import * as React from "react";
import * as MediaQuery from "react-responsive";

export function MediaSwitch(props: {
  cases: Array<{ query: string; element: React.ReactElement<{}> }>;
  children?: React.ReactNode;
}) {
  return (
    <>
      {props.cases.map(({ query, element }, i) => (
        <MediaQuery query={query} key={i}>
          {React.cloneElement(element, element.props, props.children)}
        </MediaQuery>
      ))}
    </>
  );
}
