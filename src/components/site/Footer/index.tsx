import { COLORS, Flex, Flow, Item } from "@heydovetail/ui-components";
import { LocationLink } from "@heydovetail/ui-components";
import { Container } from "@heydovetail/website/components/layout/Container";
import { DarkContainer } from "@heydovetail/website/components/layout/DarkContainer";
import { LightContainer } from "@heydovetail/website/components/layout/LightContainer";
import { LinkList } from "@heydovetail/website/components/site/LinkList";
import { Image } from "@heydovetail/website/components/util/Image";
import { HALF_GAP, PADDING, WIDTH } from "@heydovetail/website/constants";
import { locations } from "@heydovetail/website/routing/locations";
import React from "react";
import { styled } from "typestyle-react";
import Wave from "../Wave/Wave";
import capterraBadge from "./capterra-badge.png";

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
                heading="Product"
                links={[
                  { label: "Qualitative data analysis", location: locations.qualitativeDataAnalysis() },
                  { label: "Collaborative user research", location: locations.userResearch() },
                  { label: "User research repository", location: locations.researchRepository() },
                  { label: "Customers", location: locations.customers() },
                  { label: "Features", location: locations.features() },
                  { label: "Integrations", location: locations.integrations() },
                  { label: "Pricing", location: locations.pricing() }
                ]}
              />
            </Item>
            <Item style={{ verticalAlign: "top" }}>
              <LinkList
                heading="Company"
                links={[
                  { label: "About us", location: locations.about() },
                  { label: "Careers", location: locations.careers() },
                  { label: "Open source", location: locations.github() },
                  { label: "Slack community", location: locations.slack() },
                  { label: "Medium blog", location: locations.blog() },
                  { label: "Twitter", location: locations.twitter() }
                ]}
              />
            </Item>
            <Item style={{ verticalAlign: "top" }}>
              <LinkList
                heading="Resources"
                links={[
                  { label: "Help Center", location: locations.help() },
                  { label: "Research Guides", location: locations.guides() },
                  { label: "Security", location: locations.security() },
                  { label: "Log in", location: locations.logIn() }
                ]}
              />
            </Item>
            <Item style={{ verticalAlign: "top" }}>
              <LinkList
                heading="Legal"
                links={[
                  { label: "Customer Terms of Service", location: locations.termsCustomer() },
                  { label: "Website Visitor Privacy Policy", location: locations.websitePrivacy() },
                  { label: "User Privacy Policy", location: locations.privacy() },
                  { label: "All legal articles", location: locations.legal() }
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
              <FooterFinePrint>© Dovetail Research Pty. Ltd.</FooterFinePrint>
            </Item>
            <Item>
              <FooterFinePrint>ABN: 84 615 270 025</FooterFinePrint>
            </Item>
          </Flex>
        </Item>
        <Item>
          <LocationLink location={locations.capterra()}>
            <Image height={50} src={capterraBadge} text="Visit us on Capterra" width={75} />
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
  fontWeight: 500,
  opacity: 0.8
});
