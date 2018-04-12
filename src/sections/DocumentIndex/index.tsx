import { Container } from "@heydovetail/website/components/layout/Container";
import { Flex } from "@heydovetail/website/components/layout/Flex";
import { Item } from "@heydovetail/website/components/layout/Item";
import { Masonry, MasonryItem } from "@heydovetail/website/components/layout/Masonry";
import { HeroText } from "@heydovetail/website/components/site/HeroText";
import { TYPICAL_PAGE_WIDTH, TYPICAL_VERTICAL_GAP } from "@heydovetail/website/constants";
import * as React from "react";
import { Helmet } from "react-helmet";

interface Props {
  items: MasonryItem[];
  text: string;
  title: string;
}

export class DocumentIndex extends React.PureComponent<Props> {
  public render() {
    const { items, text, title } = this.props;

    return (
      <>
        <Helmet>
          <title>{title} – Dovetail</title>
        </Helmet>
        <Container maxWidth={TYPICAL_PAGE_WIDTH} verticalPadding={TYPICAL_VERTICAL_GAP / 2}>
          <Flex gap={48} layout="column">
            <Item>
              <HeroText title={title} text={text} />
            </Item>
            <Item>
              <Masonry gap={32} items={items} minColumnWidth={256} />
            </Item>
          </Flex>
        </Container>
      </>
    );
  }
}
