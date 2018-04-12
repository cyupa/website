import IllustrationBoard from "@heydovetail/website/components/illustrations/IllustrationBoard";
import IllustrationLineChart from "@heydovetail/website/components/illustrations/IllustrationLineChart";
import { locations } from "@heydovetail/website/routing/locations";
import { storiesOf } from "@heydovetail/website/util/stories";
import * as React from "react";
import { FeatureHero } from "../";

storiesOf("Site/FeatureHero", module)
  .add("default", () => (
    <FeatureHero
      image={<IllustrationLineChart />}
      location={locations.customerFeedback()}
      text="Import feedback from hundreds of apps, automatically analyze sentiment, tag feature requests, and measure changes over time."
      title="Understand your customer feedback."
    />
  ))
  .add("flipped", () => (
    <FeatureHero
      image={<IllustrationBoard />}
      imagePosition="left"
      location={locations.researchRepository()}
      text="Save notes, transcripts, and files in one place. Organize everything with projects & boards, and use simple analysis tools to find insights."
      title="Keep all of your research in one place."
    />
  ));
