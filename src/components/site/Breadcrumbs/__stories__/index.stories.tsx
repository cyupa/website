import * as React from "react";
import { Breadcrumbs } from "../";
import { storiesOf } from "../../../../util/stories";

storiesOf("Site/Breadcrumbs", module).add("default", () => (
  <Breadcrumbs
    crumbs={[
      { text: "Projects", location: { internal: false, url: "/projects" } },
      { text: "Customer feedback" },
      { text: "Benjamin Humphrey" }
    ]}
  />
));
