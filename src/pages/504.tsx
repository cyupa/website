import { ButtonLink, COLORS, Flex, Flow, Item } from "@heydovetail/ui-components";
import { Container } from "@heydovetail/website/components/layout/Container";
import { PageLayout } from "@heydovetail/website/components/layout/PageLayout";
import { Hero } from "@heydovetail/website/components/site/Hero";
import { HALF_GAP, PADDING, WIDTH } from "@heydovetail/website/constants";
import { locations } from "@heydovetail/website/routing/locations";
import React from "react";
import { Helmet } from "react-helmet";

export default class extends React.PureComponent {
  public render() {
    return (
      <PageLayout>
        <Helmet>
          <title>504 – Dovetail</title>
          <meta
            name="description"
            content="We’ll be back soon. Don’t panic! Dovetail might be undergoing maintenance or an upgrade. No doubt we’re working on restoring service, so please try again in a few minutes."
          />
          <meta
            property="og:description"
            content="We’ll be back soon. Don’t panic! Dovetail might be undergoing maintenance or an upgrade. No doubt we’re working on restoring service, so please try again in a few minutes."
          />
        </Helmet>
        <Container styled={{ maxWidth: WIDTH, padding: { x: PADDING, y: HALF_GAP } }}>
          <Flex styled={{ gap: 40, layout: "column" }}>
            <Item>
              <Hero
                maxTextWidth={512}
                title="We’ll be back soon. Don’t panic!"
                text="Dovetail might be undergoing maintenance or an upgrade. No doubt we’re working on restoring service, so try again in a few minutes."
              />
            </Item>
            <Item>
              <Flow>
                <Item>
                  <ButtonLink color={COLORS.purple} location={locations.projects()}>
                    Try again
                  </ButtonLink>
                </Item>
                <Item>
                  <ButtonLink location={locations.help()}>Get help</ButtonLink>
                </Item>
              </Flow>
            </Item>
          </Flex>
        </Container>
      </PageLayout>
    );
  }
}
