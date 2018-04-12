import { storiesOf } from "@dovetailapp/website/util/stories";
import * as React from "react";
import { HeroText } from "../";

storiesOf("Site/HeroText", module).add("default", () => (
  <HeroText title="Customer feedback &amp; research software for teams." />
));
