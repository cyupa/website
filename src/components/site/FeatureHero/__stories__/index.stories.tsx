import * as React from "react";
import { storiesOf } from "src/util/stories";
import { FeatureHero } from "../";
import IllustrationBoard from "../../../illustrations/IllustrationBoard";
import IllustrationLineChart from "../../../illustrations/IllustrationLineChart";

storiesOf("Site/FeatureHero", module)
  .add("default", () => (
    <FeatureHero
      image={<IllustrationLineChart />}
      location="/product/customer-feedback"
      text="Import feedback from hundreds of apps, automatically analyze sentiment, tag feature requests, and measure changes over time."
      title="Understand your customer feedback."
    />
  ))
  .add("flipped", () => (
    <FeatureHero
      image={<IllustrationBoard />}
      imagePosition="left"
      location="/product/research-repository"
      text="Save notes, transcripts, and files in one place. Organize everything with projects & boards, and use simple analysis tools to find insights."
      title="Keep all of your research in one place."
    />
  ));
