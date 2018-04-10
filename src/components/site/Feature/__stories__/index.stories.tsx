import * as React from "react";
import { storiesOf } from "src/util/stories";
import { Feature } from "../";

storiesOf("Site/Feature", module).add("default", () => (
  <Feature text="Import customer feedback from thousands of apps" title="Zapier integration" />
));
