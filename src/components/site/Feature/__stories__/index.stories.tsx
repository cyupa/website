import { storiesOf } from "@heydovetail/website/util/stories";
import React from "react";
import { Feature } from "../";

storiesOf("Site/Feature", module).add("default", () => (
  <Feature text="Turn sentences into structured, tagged data" title="Highlights" />
));
