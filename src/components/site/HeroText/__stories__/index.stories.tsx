import * as React from "react";
import { storiesOf } from "src/util/stories";
import { HeroText } from "../";

storiesOf("Site/HeroText", module).add("default", () => (
  <HeroText title="Customer feedback &amp; research software for teams." />
));
