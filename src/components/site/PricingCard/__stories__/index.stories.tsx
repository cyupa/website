import { storiesOf } from "@heydovetail/website/util/stories";
import React from "react";
import { PricingCard } from "../";

storiesOf("Site/PricingCard", module).add("default", () => (
  <PricingCard features={["Unlimited users", "Unlimited integrations", "Unlimited usage", "All features"]} price={4900} />
));
