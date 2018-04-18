import { SubtleButtonLink } from "@heydovetail/website/components/forms/SubtleButtonLink";
import { Container } from "@heydovetail/website/components/layout/Container";
import { Flex } from "@heydovetail/website/components/layout/Flex";
import { FlexWrap } from "@heydovetail/website/components/layout/FlexWrap";
import { Item } from "@heydovetail/website/components/layout/Item";
import { HeroText } from "@heydovetail/website/components/site/HeroText";
import { COLORS, TYPICAL_PAGE_WIDTH, TYPICAL_VERTICAL_GAP } from "@heydovetail/website/constants";
import IllustrationEmail from "@heydovetail/website/pages/confirm/IllustrationEmail";
import { locations } from "@heydovetail/website/routing/locations";
import { styled } from "@heydovetail/website/util/styled";
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
          <FlexWrap gap={32} growItems>
            <Item style={{ maxWidth: 416 }}>
              <Flex gap={40} layout="column">
                <Item>
                  <HeroText center={false} title="You’ve got mail." />
                </Item>
                <Item>
                  <p>
                    We need to confirm your email address. Please follow the instructions conveniently located in your inbox.
                  </p>
                </Item>
                <Item>
                  <ButtonWrapper>
                    <SubtleButtonLink location={locations.resendConfirmation()}>
                      Not there? Resend confirmation
                    </SubtleButtonLink>
                  </ButtonWrapper>
                </Item>
              </Flex>
            </Item>
            <Item>
              <IllustrationEmail size="100%" />
            </Item>
          </FlexWrap>
        </Container>
      </>
    );
  }
}

const ButtonWrapper = styled("span", {
  color: COLORS.i40,
  marginLeft: "-8px",

  $nest: {
    "&:hover": {
      color: COLORS.purple
    }
  }
});
