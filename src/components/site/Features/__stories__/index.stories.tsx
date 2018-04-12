import { storiesOf } from "@heydovetail/website/util/stories";
import * as React from "react";
import { Features } from "../";

storiesOf("Site/Features", module).add("default", () => (
  <Features
    features={[
      {
        text: "Import customer feedback from thousands of apps",
        title: "Zapier integration"
      },
      {
        text: "Add simple feedback forms to your website or product",
        title: "Embeddable form"
      },
      {
        text: "Bulk import customer feedback from a spreadsheet",
        title: "Spreadsheet upload"
      }
    ]}
  />
));
