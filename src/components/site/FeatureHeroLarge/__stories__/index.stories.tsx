import * as React from "react";
import { storiesOf } from "src/util/stories";
import { FeatureHeroLarge } from "../";
import IllustrationBoardLarge from "../../../illustrations/IllustrationBoardLarge";

storiesOf("Site/FeatureHeroLarge", module).add("default", () => (
  <FeatureHeroLarge
    image={<IllustrationBoardLarge />}
    text="Use a drag &amp; drop board to organize your research notes, tags, insights, and files."
    title="Organize everything on an intuitive board."
  />
));
