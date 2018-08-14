import { COLORS, Flex, FlexWrap, Flow, Item, SubtleButtonLink } from "@heydovetail/ui-components";
import { Container } from "@heydovetail/website/components/layout/Container";
import { PageLayout } from "@heydovetail/website/components/layout/PageLayout";
import { Hero } from "@heydovetail/website/components/site/Hero";
import { HALF_GAP, PADDING, WIDTH } from "@heydovetail/website/constants";
import IllustrationEmail from "@heydovetail/website/pages/confirm/IllustrationEmail";
import { locations } from "@heydovetail/website/routing/locations";
import React from "react";
import { Helmet } from "react-helmet";

export default class extends React.PureComponent {
  public render() {
    return (
      <PageLayout>
        <Helmet>
          <title>Confirm your email address – Dovetail</title>
          <meta
            name="description"
            content="We need to confirm your email address. Please follow the instructions conveniently located in your inbox."
          />
          <meta
            property="og:description"
            content="We need to confirm your email address. Please follow the instructions conveniently located in your inbox."
          />
        </Helmet>
        <Container styled={{ maxWidth: WIDTH, padding: { x: PADDING, y: HALF_GAP } }}>
          <FlexWrap styled={{ gap: 32, growItems: true }}>
            <Item style={{ maxWidth: 416 }}>
              <Flex styled={{ gap: 40, layout: "column" }}>
                <Item>
                  <Hero center={false} title="You’ve got mail." />
                </Item>
                <Item>
                  <p>We need to confirm your email address. Please follow the instructions in your inbox to continue.</p>
                </Item>
                <Item style={{ color: COLORS.purple, marginLeft: -8 }}>
                  <Flow>
                    <Item>
                      <SubtleButtonLink location={locations.resendConfirmation()}>Send it again</SubtleButtonLink>
                    </Item>
                    <Item>
                      <SubtleButtonLink location={{ internal: true, path: "/help/emails" }}>Get help</SubtleButtonLink>
                    </Item>
                  </Flow>
                </Item>
              </Flex>
            </Item>
            <Item>
              <IllustrationEmail size="100%" />
            </Item>
          </FlexWrap>
        </Container>
      </PageLayout>
    );
  }
}
