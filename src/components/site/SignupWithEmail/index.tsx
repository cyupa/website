import { ButtonLink } from "@heydovetail/website/components/forms/ButtonLink";
import { TextInput } from "@heydovetail/website/components/forms/TextInput";
import { Center } from "@heydovetail/website/components/layout/Center";
import { Flex } from "@heydovetail/website/components/layout/Flex";
import { Item } from "@heydovetail/website/components/layout/Item";
import { SmallText } from "@heydovetail/website/components/util/SmallText";
import { COLORS } from "@heydovetail/website/constants";
import { locations } from "@heydovetail/website/routing/locations";
import * as React from "react";

interface State {
  email: string | undefined;
}

export class SignupWithEmail extends React.PureComponent {
  public state: State = {
    email: undefined
  };

  public render() {
    const url =
      this.state.email !== undefined
        ? `${locations.signUp().url}?email=${encodeURIComponent(this.state.email)}`
        : locations.signUp().url;

    return (
      <Center>
        <Flex gap={24} layout="column">
          <Item>
            <Flex gap={8}>
              <Item>
                <TextInput
                  onChange={event => this.setState({ email: event.target.value })}
                  placeholder="you@company.com"
                  value={this.state.email}
                />
              </Item>
              <Item style={{ flexGrow: 0 }}>
                <ButtonLink color={COLORS.purple} location={{ internal: false, url: url }}>
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
