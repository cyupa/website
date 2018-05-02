import React from "react";
import { create } from "react-test-renderer";

export function assertReactSnapshot(element: React.ReactElement<{}>) {
  expect(create(element).toJSON()).toMatchSnapshot();
}
