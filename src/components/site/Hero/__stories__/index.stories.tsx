import * as React from "react";
import { storiesOf } from "src/util/stories";
import { Hero } from "../";
import IllustrationSpace from "../../../illustrations/IllustrationSpace";

storiesOf("Site/Hero", module).add("default", () => (
  <Hero image={<IllustrationSpace />} title="Keep all of your customer feedback in one place." />
));
