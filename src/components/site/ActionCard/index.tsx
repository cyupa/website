import { Avatar, ButtonLink, COLORS, Flex, Flow, Item } from "@heydovetail/ui-components";
import benjamin from "@heydovetail/website/avatars/benjamin.jpg";
import brad from "@heydovetail/website/avatars/brad.jpg";
import { Card } from "@heydovetail/website/components/layout/Card";
import { LIGHT_TEXT_OPACITY } from "@heydovetail/website/constants";
import { LocationDescriptor } from "@heydovetail/website/routing/locations";
import React from "react";

interface Props {
  buttonColor?: string;
  buttonText: string;
  buttonLocation: LocationDescriptor;
  showPeople?: boolean;
  text: string;
  title: string;
}

export class ActionCard extends React.PureComponent<Props> {
  public render() {
    const { buttonColor = COLORS.purple, buttonText, buttonLocation, showPeople = false, text, title } = this.props;

    return (
      <Card styled={{ padding: 32 }}>
        <Flex styled={{ gap: 16, layout: "column" }}>
          <Item>
            <h4>{title}</h4>
          </Item>
          <Item>
            <p style={{ opacity: LIGHT_TEXT_OPACITY }}>{text}</p>
          </Item>
          <Item>
            <Flex styled={{ alignItems: "center", gap: 16 }}>
              <Item style={{ flexGrow: 0 }}>
                <ButtonLink color={buttonColor} location={buttonLocation}>
                  {buttonText}
                </ButtonLink>
              </Item>
              {showPeople ? (
                <Item>
                  <Flow>
                    <Item style={{ lineHeight: 0 }}>
                      <Avatar borderColor={COLORS.p04} presenceColor={COLORS.green} url={benjamin} />
                    </Item>
                    <Item style={{ lineHeight: 0 }}>
                      <Avatar borderColor={COLORS.p04} presenceColor={COLORS.green} url={brad} />
                    </Item>
                  </Flow>
                </Item>
              ) : null}
            </Flex>
          </Item>
        </Flex>
      </Card>
    );
  }
}
