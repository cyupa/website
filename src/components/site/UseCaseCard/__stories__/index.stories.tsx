import { storiesOf } from "@dovetailapp/website/util/stories";
import * as React from "react";
import { UseCaseCard } from "../";
import { locations } from "../../../../routing/locations";
import PictogramFeedback from "../../../icons/pictograms/PictogramFeedback";

storiesOf("Site/UseCaseCard", module).add("default", () => (
  <UseCaseCard image={<PictogramFeedback />} location={locations.customerFeedback()} text="Customer feedback management " />
));
