import { ButtonLink } from "@heydovetail/website/components/forms/ButtonLink";
import { TextInput } from "@heydovetail/website/components/forms/TextInput";
import { Center } from "@heydovetail/website/components/layout/Center";
import { Flex } from "@heydovetail/website/components/layout/Flex";
import { Item } from "@heydovetail/website/components/layout/Item";
import { SmallText } from "@heydovetail/website/components/util/SmallText";
import { COLORS } from "@heydovetail/website/constants";
import { locations } from "@heydovetail/website/routing/locations";
import * as React from "react";

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
