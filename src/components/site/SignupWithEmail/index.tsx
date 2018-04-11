import * as React from "react";
import { COLORS } from "../../../constants";
import { locations } from "../../../routing/locations";
import { ButtonLink } from "../../forms/ButtonLink";
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
                <ButtonLink color={COLORS.purple} location={locations.signUp()}>
                  Try now for free
                </ButtonLink>
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
