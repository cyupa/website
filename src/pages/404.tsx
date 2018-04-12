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
          <title>404 – Dovetail</title>
        </Helmet>
        <Container maxWidth={TYPICAL_PAGE_WIDTH} verticalPadding={TYPICAL_VERTICAL_GAP / 2}>
          <div style={{ maxWidth: TYPICAL_PAGE_WIDTH / 2 }}>
            <Flex gap={40} layout="column">
              <Item>
                <HeroText center={false} maxWidth={416} title="Sorry, this page doesn’t exist." />
              </Item>
              <Item>
                <p style={{ opacity: LIGHT_TEXT_OPACITY }}>
                  It may have been moved or deleted. Check the URL is correct in the address bar. Get in touch with us if you
                  continue to have issues.
                </p>
              </Item>
              <Item>
                <Flow>
                  <Item>
                    <ButtonLink color={COLORS.p80} location={locations.home()}>
                      Back to homepage
                    </ButtonLink>
                  </Item>
                  <Item>
                    <ButtonLink color={COLORS.i80} location={locations.help()}>
                      Help and support
                    </ButtonLink>
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
