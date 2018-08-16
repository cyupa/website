import { ButtonLink, COLORS, Flex, Item, SmallText, TextInput } from "@heydovetail/ui-components";
import { Center } from "@heydovetail/website/components/layout/Center";
import { locations } from "@heydovetail/website/routing/locations";
import React from "react";

interface Props {
  buttonColor?: string;
  shade?: "light" | "dark" | "darker";
}

interface State {
  email: string | undefined;
}

export class SignupWithEmail extends React.PureComponent<Props, State> {
  public state: State = {
    email: undefined
  };

  public render() {
    const { buttonColor = COLORS.purple, shade } = this.props;

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
                  ariaLabel="Your email address"
                  onChange={event => this.setState({ email: event.target.value })}
                  placeholder="you@company.com"
                  value={this.state.email}
                />
              </Item>
              <Item style={{ flexGrow: 0 }}>
                <ButtonLink color={buttonColor} location={{ internal: false, url: url }}>
                  Try now for free
                </ButtonLink>
              </Item>
            </Flex>
          </Item>
          <Item>
            <SmallText shade={shade}>14 day free trial, no credit card required.</SmallText>
          </Item>
        </Flex>
      </Center>
    );
  }
}
