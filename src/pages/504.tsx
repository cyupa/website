import { ButtonLink } from "@heydovetail/website/components/forms/ButtonLink";
import { Container } from "@heydovetail/website/components/layout/Container";
import { Flex } from "@heydovetail/website/components/layout/Flex";
import { Flow } from "@heydovetail/website/components/layout/Flow";
import { Item } from "@heydovetail/website/components/layout/Item";
import { HeroText } from "@heydovetail/website/components/site/HeroText";
import { COLORS, LIGHT_TEXT_OPACITY, TYPICAL_PAGE_WIDTH, TYPICAL_VERTICAL_GAP } from "@heydovetail/website/constants";
import { locations } from "@heydovetail/website/routing/locations";
import * as React from "react";
import { Helmet } from "react-helmet";

export default class extends React.PureComponent {
  public render() {
    return (
      <>
        <Helmet>
          <title>504 – Dovetail</title>
        </Helmet>
        <Container maxWidth={TYPICAL_PAGE_WIDTH} verticalPadding={TYPICAL_VERTICAL_GAP / 2}>
          <div style={{ maxWidth: TYPICAL_PAGE_WIDTH / 2 }}>
            <Flex gap={40} layout="column">
              <Item>
                <HeroText center={false} maxWidth={416} title="We’ll be back soon. Don’t panic." />
              </Item>
              <Item>
                <p style={{ opacity: LIGHT_TEXT_OPACITY }}>
                  Dovetail might be undergoing maintenance or an upgrade. No doubt we’re working on restoring service as soon as
                  possible, so please try again in a few minutes.
                </p>
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
          </div>
        </Container>
      </>
    );
  }
}
