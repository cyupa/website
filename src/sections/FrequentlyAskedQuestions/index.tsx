import { Center } from "@heydovetail/website/components/layout/Center";
import { Flex } from "@heydovetail/website/components/layout/Flex";
import { FlexWrap } from "@heydovetail/website/components/layout/FlexWrap";
import { Item } from "@heydovetail/website/components/layout/Item";
import { Faq } from "@heydovetail/website/components/site/Faq";
import { HALF_GAP } from "@heydovetail/website/constants";
import * as React from "react";

interface Props {
  faqs: React.ReactElement<Faq>[];
}

export class FrequentlyAskedQuestions extends React.PureComponent<Props> {
  public render() {
    const { faqs } = this.props;

    return (
      <Flex gap={HALF_GAP} layout="column">
        <Item>
          <Center>
            <h2>Frequently asked questions</h2>
          </Center>
        </Item>
        <Item>
          <FlexWrap gap={64} growItems maxChildWidth={240} justifyContent="center">
            {faqs.map(faq => <Item>{faq}</Item>)}
          </FlexWrap>
        </Item>
      </Flex>
    );
  }
}
