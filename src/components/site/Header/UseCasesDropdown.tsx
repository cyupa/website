import { Dropdown } from "@heydovetail/ui-components";
import pictogramQda from "@heydovetail/website/components/icons/pictograms/qda.svg";
import pictogramRepository from "@heydovetail/website/components/icons/pictograms/repository.svg";
import pictogramResearch from "@heydovetail/website/components/icons/pictograms/research.svg";
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
      <Dropdown>
        <Container styled={{ padding: { x: 8, y: 0 } }}>
          <UseCase
            image={pictogramQda}
            location={locations.qualitativeDataAnalysis()}
            onClick={onDismiss}
            title="Qualitative data analysis"
          />
          <UseCase
            image={pictogramResearch}
            location={locations.userResearch()}
            onClick={onDismiss}
            title="Collaborative user research"
          />
          <UseCase
            image={pictogramRepository}
            location={locations.researchRepository()}
            onClick={onDismiss}
            title="User research repository"
          />
        </Container>
      </Dropdown>
    );
  }
}
