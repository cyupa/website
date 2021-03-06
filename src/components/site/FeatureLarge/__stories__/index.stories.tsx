import { storiesOf } from "@heydovetail/website/util/stories";
import React from "react";
import { FeatureLarge } from "../";

storiesOf("Site/FeatureLarge", module).add("default", () => (
  <FeatureLarge
    text="Upload a spreadsheet to quickly create notes, tags, or insights. Import images, audio recordings, and video with our bulk file uploader."
    title="Data import"
  />
));
