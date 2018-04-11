import * as React from "react";
import { Helmet } from "react-helmet";
import { ButtonLink } from "../components/forms/ButtonLink";
import { Container } from "../components/layout/Container";
import { Flex } from "../components/layout/Flex";
import { Flow } from "../components/layout/Flow";
import { Item } from "../components/layout/Item";
import { COLORS, LIGHT_TEXT_OPACITY, TYPICAL_PAGE_WIDTH, TYPICAL_VERTICAL_GAP } from "../constants";
import { locations } from "../routing/locations";

export default class extends React.PureComponent {
  public render() {
    return (
      <>
        <Helmet>
          <title>Dovetail – 404</title>
        </Helmet>
        <Container maxWidth={TYPICAL_PAGE_WIDTH} verticalPadding={TYPICAL_VERTICAL_GAP / 2}>
          <div style={{ marginTop: "32px", maxWidth: "416px" }}>
            <Flex gap={40} layout="column">
              <Item>
                <h1>Sorry, this page doesn’t exist.</h1>
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
