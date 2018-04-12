import { storiesOf } from "@dovetailapp/website/util/stories";
import * as React from "react";
import { Hero } from "../";
import IllustrationSpace from "../../../illustrations/IllustrationSpace";

storiesOf("Site/Hero", module).add("default", () => (
  <Hero image={<IllustrationSpace />} title="Keep all of your customer feedback in one place." />
));
