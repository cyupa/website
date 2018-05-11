import { ButtonLink, COLORS, SmallText, TextInput } from "@heydovetail/ui-components";
import { Center } from "@heydovetail/website/components/layout/Center";
import { Flex } from "@heydovetail/website/components/layout/Flex";
import { Item } from "@heydovetail/website/components/layout/Item";
import { locations } from "@heydovetail/website/routing/locations";
import React from "react";

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
        <Flex styled={{ gap: 24, layout: "column" }}>
          <Item>
            <Flex styled={{ gap: 8 }}>
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
