import { Dropdown } from "@heydovetail/ui-components";
import PictogramFeedback from "@heydovetail/website/components/icons/pictograms/PictogramFeedback";
import PictogramQda from "@heydovetail/website/components/icons/pictograms/PictogramQda";
import PictogramRepository from "@heydovetail/website/components/icons/pictograms/PictogramRepository";
import PictogramResearch from "@heydovetail/website/components/icons/pictograms/PictogramResearch";
import { Container } from "@heydovetail/website/components/layout/Container";
import { FlexWrap } from "@heydovetail/website/components/layout/FlexWrap";
import { Item } from "@heydovetail/website/components/layout/Item";
import { locations } from "@heydovetail/website/routing/locations";
import React from "react";
import { UseCase } from "./UseCase";

export class UseCasesDropdown extends React.PureComponent {
  public render() {
    return (
      <Dropdown maxWidth={360}>
        <Container styled={{ padding: { x: 16, y: 8 } }}>
          <FlexWrap styled={{ maxChildWidth: 128, gap: 0, growItems: true }}>
            <Item>
              <UseCase image={<PictogramFeedback />} location={locations.feedbackManagement()} title="Feedback management" />
            </Item>
            <Item>
              <UseCase
                image={<PictogramRepository />}
                location={locations.researchRepository()}
                title="User research repository"
              />
            </Item>
            <Item>
              <UseCase
                image={<PictogramQda />}
                location={locations.qualitativeDataAnalysis()}
                title="Qualitative data analysis"
              />
            </Item>
            <Item>
              <UseCase image={<PictogramResearch />} location={locations.userResearch()} title="Collaborative user research" />
            </Item>
          </FlexWrap>
        </Container>
      </Dropdown>
    );
  }
}
