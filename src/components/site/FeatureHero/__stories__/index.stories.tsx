import illustrationBoard from "@heydovetail/website/components/illustrations/board.svg";
import illustrationLineChart from "@heydovetail/website/components/illustrations/line-chart.svg";
import { locations } from "@heydovetail/website/routing/locations";
import { storiesOf } from "@heydovetail/website/util/stories";
import React from "react";
import { FeatureHero } from "../";

storiesOf("Site/FeatureHero", module)
  .add("default", () => (
    <FeatureHero
      image={illustrationLineChart}
      location={locations.feedbackManagement()}
      text="Import feedback from hundreds of apps, automatically analyze sentiment, tag feature requests, and measure changes over time."
      title="Understand your customer feedback."
    />
  ))
  .add("flipped", () => (
    <FeatureHero
      image={illustrationBoard}
      imagePosition="left"
      location={locations.researchRepository()}
      text="Save notes, transcripts, and files in one place. Organize everything with projects & boards, and use simple analysis tools to find insights."
      title="Keep all of your research in one place."
    />
  ));
