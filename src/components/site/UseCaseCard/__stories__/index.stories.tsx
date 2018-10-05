import pictogramRepository from "@heydovetail/website/components/icons/pictograms/repository.svg";
import { locations } from "@heydovetail/website/routing/locations";
import { storiesOf } from "@heydovetail/website/util/stories";
import React from "react";
import { UseCaseCard } from "../";

storiesOf("Site/UseCaseCard", module).add("default", () => (
  <UseCaseCard image={pictogramRepository} location={locations.researchRepository()} text="User research repository" />
));
