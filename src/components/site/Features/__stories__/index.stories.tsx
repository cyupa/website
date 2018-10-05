import { storiesOf } from "@heydovetail/website/util/stories";
import React from "react";
import { Features } from "../";

storiesOf("Site/Features", module).add("default", () => (
  <Features
    features={[
      {
        text: "Understand your research projects at a glance",
        title: "Bar chart"
      },
      {
        text: "View notes, tags, and insights on a drag & drop board",
        title: "Boards"
      },
      {
        text: "Your data is encrypted in our database and backups",
        title: "Encrypted data"
      }
    ]}
  />
));
