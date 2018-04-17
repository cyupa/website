import PictogramFeedback from "@heydovetail/website/components/icons/pictograms/PictogramFeedback";
import PictogramQda from "@heydovetail/website/components/icons/pictograms/PictogramQda";
import PictogramRepository from "@heydovetail/website/components/icons/pictograms/PictogramRepository";
import PictogramResearch from "@heydovetail/website/components/icons/pictograms/PictogramResearch";
import { Center } from "@heydovetail/website/components/layout/Center";
import { Flex } from "@heydovetail/website/components/layout/Flex";
import { GridWrap } from "@heydovetail/website/components/layout/GridWrap";
import { Item } from "@heydovetail/website/components/layout/Item";
import { UseCaseCard } from "@heydovetail/website/components/site/UseCaseCard";
import { TYPICAL_VERTICAL_GAP } from "@heydovetail/website/constants";
import { locations } from "@heydovetail/website/routing/locations";
import * as React from "react";

interface Props {
  onClick?: () => void;
  showTitle?: boolean;
}

export class UseCases extends React.PureComponent<Props> {
  public render() {
    const { onClick, showTitle = false } = this.props;

    const useCases = (
      <GridWrap growItems maxChildWidth={336} gap={32}>
        <Item style={{ minWidth: 0 }}>
          <UseCaseCard
            image={<PictogramFeedback />}
            location={locations.customerFeedback()}
            onClick={onClick}
            text="Feedback management"
          />
        </Item>
        <Item style={{ minWidth: 0 }}>
          <UseCaseCard
            image={<PictogramRepository />}
            location={locations.researchRepository()}
            onClick={onClick}
            text="User research repository"
          />
        </Item>
        <Item style={{ minWidth: 0 }}>
          <UseCaseCard
            image={<PictogramQda />}
            location={locations.qualitativeDataAnalysis()}
            onClick={onClick}
            text="Qualitative data analysis"
          />
        </Item>
        <Item style={{ minWidth: 0 }}>
          <UseCaseCard
            image={<PictogramResearch />}
            location={locations.userResearch()}
            onClick={onClick}
            text="Collaborative user research"
          />
        </Item>
      </GridWrap>
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
