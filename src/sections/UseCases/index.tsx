import * as React from "react";
import PictogramFeedback from "../../components/icons/pictograms/PictogramFeedback";
import PictogramQda from "../../components/icons/pictograms/PictogramQda";
import PictogramRepository from "../../components/icons/pictograms/PictogramRepository";
import PictogramResearch from "../../components/icons/pictograms/PictogramResearch";
import { Center } from "../../components/layout/Center";
import { Flex } from "../../components/layout/Flex";
import { Grid } from "../../components/layout/Grid";
import { Item } from "../../components/layout/Item";
import { UseCaseCard } from "../../components/site/UseCaseCard";
import { MediaToggle } from "../../components/util/MediaToggle";
import { BREAKPOINT_TABLET, TYPICAL_VERTICAL_GAP } from "../../constants";
import { locations } from "../../routing/locations";

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
