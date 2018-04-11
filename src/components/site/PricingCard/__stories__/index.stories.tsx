import * as React from "react";
import { storiesOf } from "src/util/stories";
import { PricingCard } from "../";

storiesOf("Site/PricingCard", module).add("default", () => (
  <PricingCard features={["Unlimited users", "Unlimited integrations", "Unlimited usage", "All features"]} price={4900} />
));
