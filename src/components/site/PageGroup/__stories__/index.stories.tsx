import { storiesOf } from "@heydovetail/website/util/stories";
import React from "react";
import { PageGroup } from "../";

storiesOf("Site/PageGroup", module).add("default", () => (
  <PageGroup
    pages={[
      {
        title: "Create projects and notes",
        path: "/help/create"
      },
      {
        title: "Create highlights, tags, and insights",
        path: "/help/create-more"
      },
      {
        title: "Organize your content",
        path: "/help/organize"
      },
      {
        title: "Bulk edit highlights and merge tags",
        path: "/help/bulk-edit"
      }
    ]}
    title="Get started"
  />
));
