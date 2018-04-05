import * as React from "react";
import { Dropdown } from "../../dropdown/Dropdown";
import PictogramFeedback from "../../icons/pictograms/PictogramFeedback";
import PictogramQda from "../../icons/pictograms/PictogramQda";
import PictogramRepository from "../../icons/pictograms/PictogramRepository";
import PictogramResearch from "../../icons/pictograms/PictogramResearch";
import { Container } from "../../layout/Container";
import { Grid } from "../../layout/Grid";
import { UseCase } from "./UseCase";

export class UseCasesDropdown extends React.PureComponent {
  public render() {
    return (
      <Dropdown maxWidth={360}>
        <Container horizontalPadding={16} verticalPadding={8}>
          <Grid gap={0}>
            <UseCase image={<PictogramFeedback />} location="/product/customer-feedback" title="Customer feedback management" />
            <UseCase image={<PictogramRepository />} location="/product/research-repository" title="User research repository" />
            <UseCase image={<PictogramQda />} location="/product/qda" title="Qualitative data analysis" />
            <UseCase image={<PictogramResearch />} location="/product/user-research" title="Collaborative user research" />
          </Grid>
        </Container>
      </Dropdown>
    );
  }
}
