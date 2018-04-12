import { Container } from "@heydovetail/website/components/layout/Container";
import { Flex } from "@heydovetail/website/components/layout/Flex";
import { Flow } from "@heydovetail/website/components/layout/Flow";
import { Item } from "@heydovetail/website/components/layout/Item";
import { COLORS, LIGHT_TEXT_OPACITY, TYPICAL_PAGE_WIDTH, TYPICAL_VERTICAL_GAP } from "@heydovetail/website/constants";
import { locations } from "@heydovetail/website/routing/locations";
import { styled } from "@heydovetail/website/util/styled";
import * as React from "react";
import { DarkContainer } from "../DarkContainer";
import { LightContainer } from "../LightContainer";
import Wave from "../Wave/Wave";
import { FooterList } from "./FooterList";

interface Props {
  dark?: boolean;
}

export class Footer extends React.PureComponent<Props> {
  public render() {
    const { dark = false } = this.props;

    const footer = (
      <Flex gap={64} layout="column">
        <Item>
          <Flow gap={64} rowGap={64}>
            <Item style={{ verticalAlign: "top" }}>
              <FooterList
                heading="Use cases"
                items={[
                  { label: "Feedback management", location: locations.customerFeedback() },
                  { label: "Research repository", location: locations.researchRepository() },
                  { label: "Qualitative data analysis", location: locations.qualitativeDataAnalysis() },
                  { label: "Collaborative user research", location: locations.userResearch() }
                ]}
              />
            </Item>
            <Item style={{ verticalAlign: "top" }}>
              <FooterList
                heading="Resources"
                items={[
                  { label: "All features", location: locations.features() },
                  { label: "Guides", location: locations.guides() },
                  { label: "Security", location: locations.security() },
                  { label: "Support", location: locations.help() }
                ]}
              />
            </Item>
            <Item style={{ verticalAlign: "top" }}>
              <FooterList
                heading="Legal"
                items={[
                  { label: "Terms and Policies", location: locations.legal() },
                  { label: "Customer Terms", location: locations.termsCustomer() },
                  { label: "Privacy Policy", location: locations.privacy() },
                  { label: "User Terms", location: locations.termsUser() }
                ]}
              />
            </Item>
            <Item style={{ verticalAlign: "top" }}>
              <FooterList
                heading="Company"
                items={[
                  { label: "About us", location: locations.about() },
                  { label: "Blog", location: locations.blog() },
                  { label: "Press kit", location: locations.press() },
                  { label: "Slack", location: locations.slack() }
                ]}
              />
            </Item>
          </Flow>
        </Item>
        <Item>
          <Flex gap={8} layout="column">
            <Item>
              <FooterFinePrint>Made in Australia by 🐨Auzzies and 🥝Kiwis</FooterFinePrint>
            </Item>
            <Item>
              <FooterFinePrint>© Dovetail Research Pty Ltd</FooterFinePrint>
            </Item>
            <Item>
              <FooterFinePrint>ABN: 84 615 270 025</FooterFinePrint>
            </Item>
          </Flex>
        </Item>
      </Flex>
    );

    if (dark) {
      return (
        <div style={{ marginTop: TYPICAL_VERTICAL_GAP / 2 }}>
          <DarkContainer horizontalPadding={0} verticalPadding={0}>
            <Container maxWidth={TYPICAL_PAGE_WIDTH} verticalPadding={64}>
              {footer}
            </Container>
          </DarkContainer>
        </div>
      );
    } else
      return (
        <div style={{ marginTop: TYPICAL_VERTICAL_GAP / 2 }}>
          <Wave color={COLORS.p04} size="100%" />
          <LightContainer backgroundColor={COLORS.p04} horizontalPadding={0} verticalPadding={0}>
            <Container maxWidth={TYPICAL_PAGE_WIDTH} verticalPadding={64}>
              {footer}
            </Container>
          </LightContainer>
        </div>
      );
  }
}

const FooterFinePrint = styled("p", {
  color: "inherit",
  fontSize: "12px",
  fontWeight: 500,
  opacity: LIGHT_TEXT_OPACITY
});
