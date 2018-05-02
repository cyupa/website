import { locations } from "@heydovetail/website/routing/locations";
import { storiesOf } from "@heydovetail/website/util/stories";
import React from "react";
import { ActionCard } from "../";

storiesOf("Site/ActionCard", module).add("default", () => (
  <ActionCard
    title="Contact us"
    text="Get in touch with us if you have questions about our legal documents."
    buttonText="Email us"
    buttonLocation={locations.email()}
  />
));
