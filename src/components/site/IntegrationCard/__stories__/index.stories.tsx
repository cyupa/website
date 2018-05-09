import { storiesOf } from "@heydovetail/website/util/stories";
import React from "react";
import { IntegrationCard } from "../";

storiesOf("Site/IntegrationCard", module).add("default", () => (
  <div style={{ display: "flex" }}>
    <IntegrationCard
      app="Trello"
      color="#0079bf"
      icon="https://cdn.zapier.com/storage/services/da3ff465abd3a3e1b687c52ff803af74.64x64.png"
      title="Create Dovetail notes for new Trello cards"
      path="/integrations/trello"
    />
  </div>
));
