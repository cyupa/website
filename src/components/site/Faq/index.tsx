import * as React from "react";
import { LIGHT_TEXT_OPACITY } from "../../../constants";
import { LocationLink } from "../../../routing/LocationLink";
import { LocationDescriptor } from "../../../routing/locations";
import { Flex } from "../../layout/Flex";
import { Item } from "../../layout/Item";

interface Props {
  answer: string;
  linkText?: string;
  location?: LocationDescriptor;
  question: string;
}

export class Faq extends React.PureComponent<Props> {
  public render() {
    const { answer, linkText = "Learn more", location, question } = this.props;

    return (
      <Flex gap={8} layout="column">
        <Item>
          <h4>{question}</h4>
        </Item>
        <Item>
          <p>
            <span style={{ opacity: LIGHT_TEXT_OPACITY }}>{answer}</span>
            {location !== undefined ? <LocationLink location={location}> {linkText}</LocationLink> : null}
          </p>
        </Item>
      </Flex>
    );
  }
}
