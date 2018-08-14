import { COLORS, Flex, Flow, Item } from "@heydovetail/ui-components";
import { Container } from "@heydovetail/website/components/layout/Container";
import { LinkList } from "@heydovetail/website/components/site/LinkList";
import { HALF_GAP, PADDING, WIDTH } from "@heydovetail/website/constants";
import { LocationLink } from "@heydovetail/website/routing/LocationLink";
import { locations } from "@heydovetail/website/routing/locations";
import React from "react";
import { styled } from "typestyle-react";
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
      <Flex styled={{ gap: 48, layout: "column" }}>
        <Item>
          <Flow styled={{ gap: 64, rowGap: 64 }}>
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
                heading="Product"
                links={[
                  { label: "Features", location: locations.features() },
                  { label: "Integrations", location: locations.integrations() },
                  { label: "Pricing", location: locations.pricing() },
                  { label: "Security", location: locations.security() }
                ]}
              />
            </Item>
            <Item style={{ verticalAlign: "top" }}>
              <LinkList
                heading="Resources"
                links={[
                  { label: "Help Center", location: locations.help() },
                  { label: "Research Guides", location: locations.guides() },
                  { label: "Terms of Service", location: locations.termsCustomer() },
                  { label: "Privacy Policy", location: locations.privacy() }
                ]}
              />
            </Item>
            <Item style={{ verticalAlign: "top" }}>
              <LinkList
                heading="Contact"
                links={[
                  { label: "Blog", location: locations.blog() },
                  { label: "Slack", location: locations.slack() },
                  { label: "Twitter", location: locations.twitter() },
                  { label: "Email", location: locations.email() }
                ]}
              />
            </Item>
            <Item style={{ verticalAlign: "top" }}>
              <LinkList
                heading="Company"
                links={[
                  { label: "About us", location: locations.about() },
                  { label: "Customers", location: locations.customers() },
                  { label: "Open source", location: locations.github() },
                  { label: "Press kit", location: locations.press() }
                ]}
              />
            </Item>
          </Flow>
        </Item>
        <Item>
          <Flex styled={{ gap: 8, layout: "column" }}>
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
        <Item>
          <LocationLink location={locations.capterra()}>
            <CapterraBadge />
          </LocationLink>
        </Item>
      </Flex>
    );

    if (dark) {
      return (
        <div style={{ marginTop: HALF_GAP }}>
          <DarkContainer padding={{ x: 0, y: 0 }}>
            <Container styled={{ maxWidth: WIDTH, padding: { x: PADDING, y: HALF_GAP } }}>{footer}</Container>
          </DarkContainer>
        </div>
      );
    } else
      return (
        <div style={{ marginTop: HALF_GAP }}>
          <Wave color={COLORS.p04} size="100%" />
          <LightContainer backgroundColor={COLORS.p04} padding={{ x: 0, y: 0 }}>
            <Container styled={{ maxWidth: WIDTH, padding: { x: PADDING, y: HALF_GAP } }}>{footer}</Container>
          </LightContainer>
        </div>
      );
  }
}

const FooterFinePrint = styled("p", {
  color: "inherit",
  fontSize: "12px",
  fontWeight: 400,
  opacity: 0.6
});

const CapterraBadge = styled("div", {
  backgroundImage: "url(https://assets.capterra.com/badge/c16c98c3691afd79ec3e6b52daa034ba.png)",
  backgroundSize: "contain",
  display: "inline-block",
  height: 50,
  width: 75
});
