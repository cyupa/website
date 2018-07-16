import { locations } from "@heydovetail/website/routing/locations";
import { storiesOf } from "@heydovetail/website/util/stories";
import React from "react";
import { ActionCard } from "../";
import { ButtonLink } from "../../../../../node_modules/@heydovetail/ui-components";

storiesOf("Site/ActionCard", module).add("default", () => (
  <ActionCard
    actions={[<ButtonLink location={locations.email()}>Email us</ButtonLink>]}
    title="Contact us"
    text="Get in touch with us if you have questions about our legal documents."
  />
));
