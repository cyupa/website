import { BORDER_RADIUS, COLORS, SubtleButtonLink } from "@heydovetail/ui-components";
import { Flex } from "@heydovetail/website/components/layout/Flex";
import { Item } from "@heydovetail/website/components/layout/Item";
import { IntegrationIcon } from "@heydovetail/website/components/site/IntegrationIcon";
import { LIGHT_TEXT_OPACITY } from "@heydovetail/website/constants";
import React from "react";
import { styled } from "typestyle-react";

interface Props {
  app: string;
  color: string;
  icon: string;
  title: string;
  path: string;
}

export class IntegrationCard extends React.PureComponent<Props> {
  public render() {
    const { app, color, icon, title, path } = this.props;
    return (
      <Card styled={{ color }}>
        <Flex styled={{ alignItems: "center", gap: 16, layout: "column" }}>
          <Item>
            <IntegrationIcon icon={icon} size={32} />
          </Item>
          <Item>
            <App>{app}</App>
          </Item>
          <Item>
            <p style={{ opacity: LIGHT_TEXT_OPACITY }}>{title}.</p>
          </Item>
          <Item style={{ color: COLORS.purple }}>
            <SubtleButtonLink location={{ internal: true, path }}>Learn more</SubtleButtonLink>
          </Item>
        </Flex>
      </Card>
    );
  }
}

const Card = styled("div", {
  backgroundColor: COLORS.p04,
  borderRadius: BORDER_RADIUS,
  padding: "32px",
  textAlign: "center"
});

const App = styled("h2", {
  fontSize: "20px",
  fontWeight: 500,
  lineHeight: "24px",
  marginTop: "16px"
});
