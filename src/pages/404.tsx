import { ButtonLink, COLORS, Flex, Flow, Item } from "@heydovetail/ui-components";
import { Container } from "@heydovetail/website/components/layout/Container";
import { Hero } from "@heydovetail/website/components/site/Hero";
import { HALF_GAP, PADDING, WIDTH } from "@heydovetail/website/constants";
import { locations } from "@heydovetail/website/routing/locations";
import React from "react";
import { Helmet } from "react-helmet";

export default class extends React.PureComponent {
  public render() {
    return (
      <>
        <Helmet>
          <title>404 – Dovetail</title>
          <meta
            name="description"
            content="Sorry, this page doesn’t exist. It may have been moved or deleted. Check the URL is correct in the address bar, and get in touch with us if you continue to have issues."
          />
          <meta
            property="og:description"
            content="Sorry, this page doesn’t exist. It may have been moved or deleted. Check the URL is correct in the address bar, and get in touch with us if you continue to have issues."
          />
        </Helmet>
        <Container styled={{ maxWidth: WIDTH, padding: { x: PADDING, y: HALF_GAP } }}>
          <Flex styled={{ gap: 40, layout: "column" }}>
            <Item>
              <Hero
                maxTextWidth={512}
                title="Sorry, this page doesn’t exist."
                text="It may have been moved or deleted. Check the URL is correct in the address bar, and get in touch with us if you continue to have issues."
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
