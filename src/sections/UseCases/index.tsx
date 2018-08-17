import { Flex, FlexWrap, Item } from "@heydovetail/ui-components";
import pictogramFeedback from "@heydovetail/website/components/icons/pictograms/feedback.svg";
import pictogramQda from "@heydovetail/website/components/icons/pictograms/qda.svg";
import pictogramRepository from "@heydovetail/website/components/icons/pictograms/repository.svg";
import pictogramResearch from "@heydovetail/website/components/icons/pictograms/research.svg";
import { Center } from "@heydovetail/website/components/layout/Center";
import { Wrapper } from "@heydovetail/website/components/layout/Wrapper";
import { UseCaseCard } from "@heydovetail/website/components/site/UseCaseCard";
import { HALF_GAP } from "@heydovetail/website/constants";
import { locations } from "@heydovetail/website/routing/locations";
import React from "react";

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
            image={pictogramFeedback}
            location={locations.feedbackManagement()}
            onClick={onClick}
            text="Feedback management"
          />
        </Item>
        <Item style={{ minWidth: 0 }}>
          <UseCaseCard
            image={pictogramRepository}
            location={locations.researchRepository()}
            onClick={onClick}
            text="User research repository"
          />
        </Item>
        <Item style={{ minWidth: 0 }}>
          <UseCaseCard
            image={pictogramQda}
            location={locations.qualitativeDataAnalysis()}
            onClick={onClick}
            text="Qualitative data analysis"
          />
        </Item>
        <Item style={{ minWidth: 0 }}>
          <UseCaseCard
            image={pictogramResearch}
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
