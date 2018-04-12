import { ButtonLink } from "@heydovetail/website/components/forms/ButtonLink";
import { Card } from "@heydovetail/website/components/layout/Card";
import { Flex } from "@heydovetail/website/components/layout/Flex";
import { Item } from "@heydovetail/website/components/layout/Item";
import { COLORS, LIGHT_TEXT_OPACITY } from "@heydovetail/website/constants";
import { LocationDescriptor } from "@heydovetail/website/routing/locations";
import * as React from "react";

interface Props {
  buttonText: string;
  buttonLocation: LocationDescriptor;
  text: string;
  title: string;
}

export class ActionCard extends React.PureComponent<Props> {
  public render() {
    const { buttonText, buttonLocation, text, title } = this.props;

    return (
      <Card padding={32}>
        <Flex gap={16} layout="column">
          <Item>
            <h3>{title}</h3>
          </Item>
          <Item>
            <p style={{ opacity: LIGHT_TEXT_OPACITY }}>{text}</p>
          </Item>
          <Item>
            <ButtonLink color={COLORS.purple} location={buttonLocation}>
              {buttonText}
            </ButtonLink>
          </Item>
        </Flex>
      </Card>
    );
  }
}
