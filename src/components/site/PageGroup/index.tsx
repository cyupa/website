import { Card } from "@dovetailapp/website/components/layout/Card";
import * as React from "react";
import { LocationLink } from "../../../routing/LocationLink";
import { internal } from "../../../routing/locations";
import { Flex } from "../../layout/Flex";
import { Item } from "../../layout/Item";

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
        <Flex gap={16} layout="column">
          <Item>
            <h3>{title}</h3>
          </Item>
          {pages.map((page, i) => (
            <Item key={i}>
              <LocationLink location={internal(page.path)} presentation="text" style={{ lineHeight: "24px" }}>
                {page.title}
              </LocationLink>
            </Item>
          ))}
        </Flex>
      </Card>
    );
  }
}
