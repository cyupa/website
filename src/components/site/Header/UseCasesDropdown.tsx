import { Dropdown, FlexWrap, Item } from "@heydovetail/ui-components";
import PictogramFeedback from "@heydovetail/website/components/icons/pictograms/PictogramFeedback";
import PictogramQda from "@heydovetail/website/components/icons/pictograms/PictogramQda";
import PictogramRepository from "@heydovetail/website/components/icons/pictograms/PictogramRepository";
import PictogramResearch from "@heydovetail/website/components/icons/pictograms/PictogramResearch";
import { Container } from "@heydovetail/website/components/layout/Container";
import { locations } from "@heydovetail/website/routing/locations";
import React from "react";
import { UseCase } from "./UseCase";

interface Props {
  onDismiss: () => void;
}

export class UseCasesDropdown extends React.PureComponent<Props> {
  public render() {
    const { onDismiss } = this.props;

    return (
      <Dropdown maxWidth={360}>
        <Container styled={{ padding: { x: 16, y: 8 } }}>
          <FlexWrap styled={{ maxChildWidth: 128, gap: 0, growItems: true }}>
            <Item>
              <UseCase
                image={<PictogramFeedback />}
                location={locations.feedbackManagement()}
                onClick={onDismiss}
                title="Feedback management"
              />
            </Item>
            <Item>
              <UseCase
                image={<PictogramRepository />}
                location={locations.researchRepository()}
                onClick={onDismiss}
                title="User research repository"
              />
            </Item>
            <Item>
              <UseCase
                image={<PictogramQda />}
                location={locations.qualitativeDataAnalysis()}
                onClick={onDismiss}
                title="Qualitative data analysis"
              />
            </Item>
            <Item>
              <UseCase
                image={<PictogramResearch />}
                location={locations.userResearch()}
                onClick={onDismiss}
                title="Collaborative user research"
              />
            </Item>
          </FlexWrap>
        </Container>
      </Dropdown>
    );
  }
}
