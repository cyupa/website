import { ButtonLink } from "@heydovetail/website/components/forms/ButtonLink";
import { Center } from "@heydovetail/website/components/layout/Center";
import { Container } from "@heydovetail/website/components/layout/Container";
import { Flex } from "@heydovetail/website/components/layout/Flex";
import { Flow } from "@heydovetail/website/components/layout/Flow";
import { Item } from "@heydovetail/website/components/layout/Item";
import { SmallText } from "@heydovetail/website/components/util/SmallText";
import { COLORS, TYPICAL_PAGE_WIDTH, TYPICAL_VERTICAL_GAP } from "@heydovetail/website/constants";
import { locations } from "@heydovetail/website/routing/locations";
import * as React from "react";

export class CenteredSignUp extends React.PureComponent {
  public render() {
    return (
      <Container maxWidth={TYPICAL_PAGE_WIDTH / 2}>
        <Flex gap={TYPICAL_VERTICAL_GAP / 2} layout="column">
          <Item>
            <Center>
              <h2>Start a free trial</h2>
            </Center>
          </Item>
          <Item>
            <Flow gap={24} rowGap={24}>
              <Item>
                <ButtonLink color={COLORS.purple} location={locations.signUp()}>
                  Try now for free
                </ButtonLink>
              </Item>
              <Item>
                <SmallText>14 day free trial, no credit card required.</SmallText>
              </Item>
            </Flow>
          </Item>
        </Flex>
      </Container>
    );
  }
}
