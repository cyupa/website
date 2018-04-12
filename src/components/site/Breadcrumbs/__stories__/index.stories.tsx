import { storiesOf } from "@heydovetail/website/util/stories";
import * as React from "react";
import { Breadcrumbs } from "../";

storiesOf("Site/Breadcrumbs", module).add("default", () => (
  <Breadcrumbs
    crumbs={[
      { text: "Projects", location: { internal: false, url: "/projects" } },
      { text: "Customer feedback" },
      { text: "Benjamin Humphrey" }
    ]}
  />
));
