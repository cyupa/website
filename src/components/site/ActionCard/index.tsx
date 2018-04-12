import { ButtonLink } from "@dovetailapp/website/components/forms/ButtonLink";
import { Card } from "@dovetailapp/website/components/layout/Card";
import { COLORS, LIGHT_TEXT_OPACITY } from "@dovetailapp/website/constants";
import * as React from "react";
import { LocationDescriptor } from "../../../routing/locations";
import { Flex } from "../../layout/Flex";
import { Item } from "../../layout/Item";

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
