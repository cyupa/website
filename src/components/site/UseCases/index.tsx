import * as React from "react";
import { BREAKPOINT_TABLET } from "../../../constants";
import PictogramFeedback from "../../icons/pictograms/PictogramFeedback";
import PictogramQda from "../../icons/pictograms/PictogramQda";
import PictogramRepository from "../../icons/pictograms/PictogramRepository";
import PictogramResearch from "../../icons/pictograms/PictogramResearch";
import { Grid } from "../../layout/Grid";
import { MediaToggle } from "../../util/MediaToggle";
import { UseCaseCard } from "../UseCaseCard";

export class UseCases extends React.PureComponent {
  public render() {
    return (
      <MediaToggle
        breakpoint={BREAKPOINT_TABLET}
        narrow={<Grid gap={32} gridTemplateColumns="1fr" />}
        wide={<Grid gap={32} gridTemplateColumns="1fr 1fr" />}
      >
        <UseCaseCard image={<PictogramFeedback />} location="/product/customer-feedback" text="Customer feedback management" />
        <UseCaseCard image={<PictogramRepository />} location="/product/research-repository" text="User research repository" />
        <UseCaseCard image={<PictogramQda />} location="/product/qda" text="Qualitative data analysis" />
        <UseCaseCard image={<PictogramResearch />} location="/product/user-research" text="Collaborative user research" />
      </MediaToggle>
    );
  }
}
