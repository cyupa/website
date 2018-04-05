import * as React from "react";
import { COLORS } from "../../../constants";
import { Button } from "../../forms/Button";
import { TextInput } from "../../forms/TextInput";
import { Center } from "../../layout/Center";
import { Flex } from "../../layout/Flex";
import { Item } from "../../layout/Item";
import { SmallText } from "../../util/SmallText";

export class SignupWithEmail extends React.PureComponent {
  public render() {
    return (
      <Center>
        <Flex gap={24} layout="column">
          <Item>
            <Flex gap={8}>
              <Item>
                <TextInput placeholder="you@company.com" />
              </Item>
              <Item style={{ flexGrow: 0 }}>
                <Button color={COLORS.purple} onClick={() => {}}>
                  Try now for free
                </Button>
              </Item>
            </Flex>
          </Item>
          <Item>
            <SmallText>14 day free trial, no credit card required.</SmallText>
          </Item>
        </Flex>
      </Center>
    );
  }
}
