import { storiesOf } from "@storybook/react";
import * as React from "react";
import { HeroText } from "../";

storiesOf("Site/HeroText", module).add("default", () => (
  <HeroText text="Customer feedback &amp; research software for teams." />
));
