import { storiesOf } from "@storybook/react";
import * as React from "react";
import { Feature } from "../";

storiesOf("Site/Feature", module).add("default", () => (
  <Feature text="Import customer feedback from thousands of apps" title="Zapier integration" />
));
