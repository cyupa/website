import { Container } from "@heydovetail/website/components/layout/Container";
import { Flex } from "@heydovetail/website/components/layout/Flex";
import { Flow } from "@heydovetail/website/components/layout/Flow";
import { Item } from "@heydovetail/website/components/layout/Item";
import { LinkList } from "@heydovetail/website/components/site/LinkList";
import { COLORS, HALF_GAP, LIGHT_TEXT_OPACITY, PADDING, WIDTH } from "@heydovetail/website/constants";
import { locations } from "@heydovetail/website/routing/locations";
import { styled } from "@heydovetail/website/util/styled";
import * as React from "react";
import { DarkContainer } from "../DarkContainer";
import { LightContainer } from "../LightContainer";
import Wave from "../Wave/Wave";

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
              <LinkList
                heading="Use cases"
                links={[
                  { label: "Feedback management", location: locations.feedbackManagement() },
                  { label: "Research repository", location: locations.researchRepository() },
                  { label: "Qualitative data analysis", location: locations.qualitativeDataAnalysis() },
                  { label: "Collaborative user research", location: locations.userResearch() }
                ]}
              />
            </Item>
            <Item style={{ verticalAlign: "top" }}>
              <LinkList
                heading="Resources"
                links={[
                  { label: "All features", location: locations.features() },
                  { label: "Guides", location: locations.guides() },
                  { label: "Security", location: locations.security() },
                  { label: "Support", location: locations.help() }
                ]}
              />
            </Item>
            <Item style={{ verticalAlign: "top" }}>
              <LinkList
                heading="Legal"
                links={[
                  { label: "All terms and policies", location: locations.legal() },
                  { label: "Customer Terms", location: locations.termsCustomer() },
                  { label: "User Privacy Policy", location: locations.privacy() },
                  { label: "User Terms", location: locations.termsUser() }
                ]}
              />
            </Item>
            <Item style={{ verticalAlign: "top" }}>
              <LinkList
                heading="Company"
                links={[
                  { label: "About us", location: locations.about() },
                  { label: "Customers", location: locations.customers() },
                  { label: "Our blog", location: locations.blog() },
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
        <div style={{ marginTop: HALF_GAP }}>
          <DarkContainer padding={{ x: 0, y: 0 }}>
            <Container maxWidth={WIDTH} padding={{ x: PADDING, y: HALF_GAP }}>
              {footer}
            </Container>
          </DarkContainer>
        </div>
      );
    } else
      return (
        <div style={{ marginTop: HALF_GAP }}>
          <Wave color={COLORS.p04} size="100%" />
          <LightContainer backgroundColor={COLORS.p04} padding={{ x: 0, y: 0 }}>
            <Container maxWidth={WIDTH} padding={{ x: PADDING, y: HALF_GAP }}>
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
