import { Flex, Item } from "@heydovetail/ui-components";
import { Card } from "@heydovetail/website/components/layout/Card";
import React from "react";

interface Props {
  actions?: React.ReactNode[];
  text: string;
  title: string;
}

export class ActionCard extends React.PureComponent<Props> {
  public render() {
    const { actions, text, title } = this.props;

    return (
      <Card styled={{ padding: 32 }}>
        <Flex styled={{ gap: 16, layout: "column" }}>
          <Item>
            <h4>{title}</h4>
          </Item>
          <Item>
            <p>{text}</p>
          </Item>
          {actions !== undefined && actions.length > 0 ? (
            <Item>
              <Flex styled={{ alignItems: "center", gap: 16 }}>
                {actions.map((a, i) => (
                  <Item key={i} style={{ flexGrow: 0 }}>
                    {a}
                  </Item>
                ))}
              </Flex>
            </Item>
          ) : null}
        </Flex>
      </Card>
    );
  }
}
