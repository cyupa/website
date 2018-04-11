import * as React from "react";
import { LIGHT_TEXT_OPACITY } from "../../../constants";
import { Flex } from "../../layout/Flex";
import { Item } from "../../layout/Item";

interface Props {
  question: string;
  answer: string;
}

export class Faq extends React.PureComponent<Props> {
  public render() {
    const { question, answer } = this.props;

    return (
      <Flex gap={8} layout="column">
        <Item>
          <h4>{question}</h4>
        </Item>
        <Item>
          <p style={{ opacity: LIGHT_TEXT_OPACITY }}>{answer}</p>
        </Item>
      </Flex>
    );
  }
}
