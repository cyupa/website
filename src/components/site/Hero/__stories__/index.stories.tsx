import IllustrationSpace from "@heydovetail/website/components/illustrations/IllustrationSpace";
import { storiesOf } from "@heydovetail/website/util/stories";
import * as React from "react";
import { Hero } from "../";

storiesOf("Site/Hero", module).add("default", () => (
  <Hero image={<IllustrationSpace />} title="Keep all of your customer feedback in one place." />
));
