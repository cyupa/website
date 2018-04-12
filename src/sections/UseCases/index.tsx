import PictogramFeedback from "@heydovetail/website/components/icons/pictograms/PictogramFeedback";
import PictogramQda from "@heydovetail/website/components/icons/pictograms/PictogramQda";
import PictogramRepository from "@heydovetail/website/components/icons/pictograms/PictogramRepository";
import PictogramResearch from "@heydovetail/website/components/icons/pictograms/PictogramResearch";
import { Center } from "@heydovetail/website/components/layout/Center";
import { Flex } from "@heydovetail/website/components/layout/Flex";
import { Grid } from "@heydovetail/website/components/layout/Grid";
import { Item } from "@heydovetail/website/components/layout/Item";
import { UseCaseCard } from "@heydovetail/website/components/site/UseCaseCard";
import { MediaToggle } from "@heydovetail/website/components/util/MediaToggle";
import { BREAKPOINT_TABLET, TYPICAL_VERTICAL_GAP } from "@heydovetail/website/constants";
import { locations } from "@heydovetail/website/routing/locations";
import * as React from "react";

interface Props {
  showTitle?: boolean;
}

export class UseCases extends React.PureComponent<Props> {
  public render() {
    const { showTitle = false } = this.props;

    const useCases = (
      <MediaToggle
        breakpoint={BREAKPOINT_TABLET}
        narrow={<Grid gap={32} gridTemplateColumns="1fr" />}
        wide={<Grid gap={32} gridTemplateColumns="1fr 1fr" />}
      >
        <UseCaseCard
          image={<PictogramFeedback />}
          location={locations.customerFeedback()}
          text="Customer feedback management"
        />
        <UseCaseCard
          image={<PictogramRepository />}
          location={locations.researchRepository()}
          text="User research repository"
        />
        <UseCaseCard image={<PictogramQda />} location={locations.qualitativeDataAnalysis()} text="Qualitative data analysis" />
        <UseCaseCard image={<PictogramResearch />} location={locations.userResearch()} text="Collaborative user research" />
      </MediaToggle>
    );

    if (showTitle) {
      return (
        <Flex gap={TYPICAL_VERTICAL_GAP / 2} layout="column">
          <Item>
            <Center>
              <h2>Explore use cases</h2>
            </Center>
          </Item>
          <Item>{useCases}</Item>
        </Flex>
      );
    } else return useCases;
  }
}
