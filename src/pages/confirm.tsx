import { SubtleButtonLink } from "@heydovetail/website/components/forms/SubtleButtonLink";
import { Container } from "@heydovetail/website/components/layout/Container";
import { Flex } from "@heydovetail/website/components/layout/Flex";
import { Item } from "@heydovetail/website/components/layout/Item";
import { HeroText } from "@heydovetail/website/components/site/HeroText";
import { COLORS, TYPICAL_PAGE_WIDTH, TYPICAL_VERTICAL_GAP } from "@heydovetail/website/constants";
import { locations } from "@heydovetail/website/routing/locations";
import * as React from "react";
import { Helmet } from "react-helmet";

export default class extends React.PureComponent {
  public render() {
    return (
      <>
        <Helmet>
          <title>Confirm your email address – Dovetail</title>
        </Helmet>
        <Container maxWidth={TYPICAL_PAGE_WIDTH} verticalPadding={TYPICAL_VERTICAL_GAP / 2}>
          <div style={{ maxWidth: TYPICAL_PAGE_WIDTH * 0.75 }}>
            <Flex gap={40} layout="column">
              <Item>
                <HeroText center={false} title="You’ve got mail." />
              </Item>
              <Item>
                <p>
                  Thanks for signing up! Now we need to confirm your email address. Please follow the instructions conveniently
                  located in your inbox to continue.
                </p>
              </Item>
              <Item style={{ color: COLORS.purple, marginLeft: "-8px" }}>
                <SubtleButtonLink location={locations.resendConfirmation()}>No email? Resend confirmation</SubtleButtonLink>
              </Item>
            </Flex>
          </div>
        </Container>
      </>
    );
  }
}
