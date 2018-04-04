import { storiesOf } from "@storybook/react";
import * as React from "react";
import { UseCaseCard } from "../";
import PictogramFeedback from "../../../icons/pictograms/PictogramFeedback";

storiesOf("Site/UseCaseCard", module).add("default", () => (
  <UseCaseCard image={<PictogramFeedback />} location="/product/customer-feedback" text="Customer feedback management " />
));
