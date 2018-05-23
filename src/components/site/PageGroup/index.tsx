import { Flex } from "@heydovetail/ui-components";
import { Item } from "@heydovetail/ui-components";
import { Card } from "@heydovetail/website/components/layout/Card";
import { LocationLink } from "@heydovetail/website/routing/LocationLink";
import { internal } from "@heydovetail/website/routing/locations";
import React from "react";

interface Page {
  path: string;
  title: string;
}

interface Props {
  pages: Page[];
  title: string;
}

export class PageGroup extends React.PureComponent<Props> {
  public render() {
    const { pages, title } = this.props;

    return (
      <Card styled={{ padding: 32 }}>
        <Flex styled={{ gap: 16, layout: "column" }}>
          <Item>
            <h4>{title}</h4>
          </Item>
          <Item>
            <Flex styled={{ gap: 12, layout: "column" }}>
              {pages.map((page, i) => (
                <Item key={i}>
                  <LocationLink location={internal(page.path)} presentation="text" style={{ lineHeight: "28px" }}>
                    {page.title}
                  </LocationLink>
                </Item>
              ))}
            </Flex>
          </Item>
        </Flex>
      </Card>
    );
  }
}
