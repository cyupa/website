import { Flex } from "@heydovetail/website/components/layout/Flex";
import { Item } from "@heydovetail/website/components/layout/Item";
import { IntegrationIcon } from "@heydovetail/website/components/site/IntegrationIcon";
import { ActionTextWithArrow } from "@heydovetail/website/components/util/ActionTextWithArrow";
import { BORDER_RADIUS, COLORS } from "@heydovetail/website/constants";
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
        <Flex styled={{ alignItems: "center", gap: 24, layout: "column" }}>
          <Item>
            <IntegrationIcon>
              <img src={icon} height={32} width={32} />
            </IntegrationIcon>
          </Item>
          <Item>
            <App>{app}</App>
          </Item>
          <Item>
            <p>{title}.</p>
          </Item>
          <Item style={{ color: COLORS.purple }}>
            <ActionTextWithArrow location={{ internal: true, path }} />
          </Item>
        </Flex>
      </Card>
    );
  }
}

const Card = styled("div", ({ color }: { color: string }) => ({
  backgroundColor: COLORS.p04,
  borderTop: `4px solid ${color}`,
  borderRadius: BORDER_RADIUS,
  padding: "32px",
  textAlign: "center"
}));

const App = styled("h2", {
  fontSize: "20px",
  fontWeight: 500,
  lineHeight: "24px",
  marginTop: "8px"
});
