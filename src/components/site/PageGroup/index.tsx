import { Card } from "@heydovetail/website/components/layout/Card";
import { Flex } from "@heydovetail/website/components/layout/Flex";
import { Item } from "@heydovetail/website/components/layout/Item";
import { LocationLink } from "@heydovetail/website/routing/LocationLink";
import { internal } from "@heydovetail/website/routing/locations";
import * as React from "react";

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
      <Card padding={32}>
        <Flex gap={12} layout="column">
          <Item>
            <h3>{title}</h3>
          </Item>
          {pages.map((page, i) => (
            <Item key={i}>
              <LocationLink location={internal(page.path)} presentation="text" style={{ lineHeight: "28px" }}>
                {page.title}
              </LocationLink>
            </Item>
          ))}
        </Flex>
      </Card>
    );
  }
}
