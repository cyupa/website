import { ButtonLink } from "@heydovetail/website/components/forms/ButtonLink";
import { Container } from "@heydovetail/website/components/layout/Container";
import { Flex } from "@heydovetail/website/components/layout/Flex";
import { Flow } from "@heydovetail/website/components/layout/Flow";
import { Item } from "@heydovetail/website/components/layout/Item";
import { HeroText } from "@heydovetail/website/components/site/HeroText";
import { COLORS, HALF_GAP, PADDING, WIDTH } from "@heydovetail/website/constants";
import { locations } from "@heydovetail/website/routing/locations";
import * as React from "react";
import { Helmet } from "react-helmet";

export default class extends React.PureComponent {
  public render() {
    return (
      <>
        <Helmet>
          <title>404 – Dovetail</title>
        </Helmet>
        <Container maxWidth={WIDTH} padding={{ x: PADDING, y: HALF_GAP }}>
          <Flex gap={40} layout="column">
            <Item>
              <HeroText
                center={false}
                maxWidth={WIDTH / 2}
                title="Sorry, this page doesn’t exist."
                text="It may have been moved or deleted. Check the URL is correct in the address bar, and get in touch with us if
                  you continue to have issues."
              />
            </Item>
            <Item>
              <Flow>
                <Item>
                  <ButtonLink color={COLORS.purple} location={locations.home()}>
                    Back to homepage
                  </ButtonLink>
                </Item>
                <Item>
                  <ButtonLink location={locations.help()}>Get help</ButtonLink>
                </Item>
              </Flow>
            </Item>
          </Flex>
        </Container>
      </>
    );
  }
}
