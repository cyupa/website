import * as React from "react";
import { COLORS } from "../../../constants";
import { styled } from "../../../util/styled";
import { Button } from "../../forms/Button";
import { Flex } from "../../layout/Flex";
import { Flow } from "../../layout/Flow";
import { Item } from "../../layout/Item";
import { Hide } from "../../util/Hide";
import { SmallText } from "../../util/SmallText";

interface Props {
  image: React.ReactNode;
  title: string;
}

export class Hero extends React.PureComponent<Props> {
  public render() {
    const { image, title } = this.props;
    return (
      <Flex gap={32}>
        <Item>
          <Flex gap={64} layout="column">
            <Item>
              <Heading>
                <h1>{title}</h1>
              </Heading>
            </Item>
            <Item>
              <Flow gap={24}>
                <Item>
                  <Button color={COLORS.purple} onClick={() => {}}>
                    Try now for free
                  </Button>
                </Item>
                <Item>
                  <SmallText>14 day free trial, no credit card required.</SmallText>
                </Item>
              </Flow>
            </Item>
          </Flex>
        </Item>
        <Hide device="tablet">
          <Item>
            <Image>{image}</Image>
          </Item>
        </Hide>
      </Flex>
    );
  }
}

const Heading = styled("div", {
  marginTop: "32px",
  maxWidth: "464px"
});

const Image = styled("div", {
  marginRight: "-280px"
});
