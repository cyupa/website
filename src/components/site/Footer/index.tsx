import * as React from "react";
import { COLORS, TYPICAL_PAGE_WIDTH } from "../../../constants";
import { locations } from "../../../routing/locations";
import { styled } from "../../../util/styled";
import { Container } from "../../layout/Container";
import { Flex } from "../../layout/Flex";
import { GridWrap } from "../../layout/GridWrap";
import { Item } from "../../layout/Item";
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
          <GridWrap gap={64}>
            <Item>
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
            <Item>
              <FooterList
                heading="Useful links"
                items={[
                  { label: "Home", location: locations.home() },
                  { label: "Pricing", location: locations.pricing() },
                  { label: "All features", location: locations.features() },
                  { label: "Support", location: locations.help() }
                ]}
              />
            </Item>
            <Item>
              <FooterList
                heading="Resources"
                items={[
                  { label: "Research guides", location: locations.guides() },
                  { label: "Privacy Policy", location: locations.legal() },
                  { label: "Terms of Service", location: locations.legal() },
                  { label: "Security", location: locations.security() }
                ]}
              />
            </Item>
            <Item>
              <FooterList
                heading="Company"
                items={[
                  { label: "About us", location: locations.about() },
                  { label: "Press kit", location: locations.press() },
                  { label: "Blog", location: locations.blog() },
                  { label: "Slack", location: locations.slack() }
                ]}
              />
            </Item>
          </GridWrap>
        </Item>
        <Item>
          <Flex gap={8} layout="column">
            <Item>
              <FooterFinePrint>© Dovetail Research Pty Ltd</FooterFinePrint>
            </Item>
            <Item>
              <FooterFinePrint>Made in 🐨Australia and 🥝New Zealand</FooterFinePrint>
            </Item>
          </Flex>
        </Item>
      </Flex>
    );

    if (dark) {
      return (
        <DarkContainer>
          <Container maxWidth={TYPICAL_PAGE_WIDTH} verticalPadding={64}>
            {footer}
          </Container>
        </DarkContainer>
      );
    } else
      return (
        <>
          <Wave color={COLORS.p04} />
          <LightContainer backgroundColor={COLORS.p04}>
            <Container maxWidth={TYPICAL_PAGE_WIDTH} verticalPadding={64}>
              {footer}
            </Container>
          </LightContainer>
        </>
      );
  }
}

const FooterFinePrint = styled("p", {
  color: "inherit",
  fontSize: "12px",
  fontWeight: 500,
  opacity: 0.6
});
