import { Flex, FlexWrap, Item } from "@heydovetail/ui-components";
import { Center } from "@heydovetail/website/components/layout/Center";
import { Wrapper } from "@heydovetail/website/components/layout/Wrapper";
import { Faq } from "@heydovetail/website/components/site/Faq";
import { HALF_GAP } from "@heydovetail/website/constants";
import React from "react";

interface Props {
  faqs: React.ReactElement<Faq>[];
}

export class FrequentlyAskedQuestions extends React.PureComponent<Props> {
  public render() {
    const { faqs } = this.props;

    return (
      <Wrapper>
        <Flex styled={{ gap: HALF_GAP, layout: "column" }}>
          <Item>
            <Center>
              <h2>Frequently asked questions</h2>
            </Center>
          </Item>
          <Item>
            <FlexWrap styled={{ gap: 64, growItems: true, maxChildWidth: 240, justifyContent: "center" }}>
              {faqs.map((faq, i) => <Item key={i}>{faq}</Item>)}
            </FlexWrap>
          </Item>
        </Flex>
      </Wrapper>
    );
  }
}
