import { ButtonLink } from "@heydovetail/website/components/forms/ButtonLink";
import { Container } from "@heydovetail/website/components/layout/Container";
import { Flex } from "@heydovetail/website/components/layout/Flex";
import { Flow } from "@heydovetail/website/components/layout/Flow";
import { Item } from "@heydovetail/website/components/layout/Item";
import { Masonry } from "@heydovetail/website/components/layout/Masonry";
import { HeroText } from "@heydovetail/website/components/site/HeroText";
import { StaffMemberCard } from "@heydovetail/website/components/site/StaffMemberCard";
import { COLORS, TYPICAL_PAGE_WIDTH, TYPICAL_VERTICAL_GAP } from "@heydovetail/website/constants";
import { locations } from "@heydovetail/website/routing/locations";
import * as React from "react";
import { Helmet } from "react-helmet";
import * as benjamin from "./benjamin.jpg";
import * as brad from "./brad.jpg";

export default class extends React.PureComponent {
  public render() {
    return (
      <>
        <Helmet>
          <title>About us – Dovetail</title>
        </Helmet>
        <Container maxWidth={TYPICAL_PAGE_WIDTH} verticalPadding={TYPICAL_VERTICAL_GAP / 2}>
          <Flex gap={TYPICAL_VERTICAL_GAP} layout="column">
            <Item>
              <Flex gap={32} layout="column">
                <Item>
                  <HeroText center={false} maxWidth={416} title="About us" />
                </Item>
                <Item>
                  <p>
                    We’re a self-funded startup created by two ex-Atlassians, based in Sydney, Australia. We launched the first
                    version of Dovetail in October 2016, and we’ve been going ever since. We believe that deeply understanding
                    your customers is the secret ingredient to making great products, so we created Dovetail to help thousands
                    of teams organize, analyze, and share their customer feedback &amp; user research.
                  </p>
                </Item>
                <Item>
                  <Flow>
                    <Item>
                      <ButtonLink color={COLORS.purple} location={locations.signUp()}>
                        Try Dovetail for free
                      </ButtonLink>
                    </Item>
                    <Item>
                      <ButtonLink location={locations.blog()}>Visit our blog</ButtonLink>
                    </Item>
                  </Flow>
                </Item>
              </Flex>
            </Item>
            <Item>
              <Flex gap={32} layout="column">
                <Item>
                  <h2>The team</h2>
                </Item>
                <Item>
                  <Masonry
                    gap={32}
                    items={[
                      {
                        id: "benjamin",
                        node: (
                          <StaffMemberCard
                            bio="Benjamin is a kiwi designer, developer, and entrepreneur living in Sydney. He loves creating world-class products and believes in the power of user research to do so. Previously Benjamin has led design projects at Atlassian, Delicious, and Ubuntu."
                            image={benjamin}
                            name="Benjamin Humphrey"
                            role="CEO &amp; Co-founder"
                          />
                        )
                      },
                      {
                        id: "brad",
                        node: (
                          <StaffMemberCard
                            bio="Brad’s a talented software architect living in Sydney. He has a Bachelor of Engineering from Griffith University and previously worked as an architect at Atlassian. If you’re reading this then the site is up, so well done Brad. Keep it up."
                            image={brad}
                            name="Brad Ayers"
                            role="CTO &amp; Co-founder"
                          />
                        )
                      }
                    ]}
                    minColumnWidth={256}
                  />
                </Item>
              </Flex>
            </Item>
          </Flex>
        </Container>
      </>
    );
  }
}
