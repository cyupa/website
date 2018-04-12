import { locations } from "@dovetailapp/website/routing/locations";
import * as React from "react";
import { ActionCard } from "../";
import { storiesOf } from "../../../../util/stories";

storiesOf("Site/ActionCard", module).add("default", () => (
  <ActionCard
    title="Contact us"
    text="Get in touch with us if you have questions about our legal documents."
    buttonText="Email us"
    buttonLocation={locations.email()}
  />
));
