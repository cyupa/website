import { Dropdown } from "@heydovetail/website/components/dropdown/Dropdown";
import PictogramFeedback from "@heydovetail/website/components/icons/pictograms/PictogramFeedback";
import PictogramQda from "@heydovetail/website/components/icons/pictograms/PictogramQda";
import PictogramRepository from "@heydovetail/website/components/icons/pictograms/PictogramRepository";
import PictogramResearch from "@heydovetail/website/components/icons/pictograms/PictogramResearch";
import { Container } from "@heydovetail/website/components/layout/Container";
import { Grid } from "@heydovetail/website/components/layout/Grid";
import { locations } from "@heydovetail/website/routing/locations";
import * as React from "react";
import { UseCase } from "./UseCase";

export class UseCasesDropdown extends React.PureComponent {
  public render() {
    return (
      <Dropdown maxWidth={360}>
        <Container horizontalPadding={16} verticalPadding={8}>
          <Grid gap={0}>
            <UseCase
              image={<PictogramFeedback />}
              location={locations.customerFeedback()}
              title="Customer feedback management"
            />
            <UseCase
              image={<PictogramRepository />}
              location={locations.researchRepository()}
              title="User research repository"
            />
            <UseCase
              image={<PictogramQda />}
              location={locations.qualitativeDataAnalysis()}
              title="Qualitative data analysis"
            />
            <UseCase image={<PictogramResearch />} location={locations.userResearch()} title="Collaborative user research" />
          </Grid>
        </Container>
      </Dropdown>
    );
  }
}
