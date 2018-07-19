import { Flex, FlexWrap, Item } from "@heydovetail/ui-components";
import PictogramFeedback from "@heydovetail/website/components/icons/pictograms/PictogramFeedback";
import PictogramQda from "@heydovetail/website/components/icons/pictograms/PictogramQda";
import PictogramRepository from "@heydovetail/website/components/icons/pictograms/PictogramRepository";
import PictogramResearch from "@heydovetail/website/components/icons/pictograms/PictogramResearch";
import { Center } from "@heydovetail/website/components/layout/Center";
import { UseCaseCard } from "@heydovetail/website/components/site/UseCaseCard";
import { HALF_GAP } from "@heydovetail/website/constants";
import { locations } from "@heydovetail/website/routing/locations";
import React from "react";
import { styled } from "../../../node_modules/typestyle-react";

interface Props {
  onClick?: () => void;
  showTitle?: boolean;
}

export class UseCases extends React.PureComponent<Props> {
  public render() {
    const { onClick, showTitle = false } = this.props;

    const useCases = (
      <FlexWrap styled={{ growItems: true, maxChildWidth: 336, gap: 32 }}>
        <Item style={{ minWidth: 0 }}>
          <UseCaseCard
            image={<PictogramFeedback />}
            location={locations.feedbackManagement()}
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
      </FlexWrap>
    );

    if (showTitle) {
      return (
        <Wrapper>
          <Flex styled={{ gap: HALF_GAP, layout: "column" }}>
            <Item>
              <Center>
                <h2>Explore use cases</h2>
              </Center>
            </Item>
            <Item>{useCases}</Item>
          </Flex>
        </Wrapper>
      );
    } else return <Wrapper>{useCases}</Wrapper>;
  }
}

const Wrapper = styled("div", {
  padding: `${HALF_GAP}px 0`
});
