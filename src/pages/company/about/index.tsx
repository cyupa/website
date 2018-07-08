import { ButtonLink, COLORS } from "@heydovetail/ui-components";
import { Item } from "@heydovetail/ui-components";
import { Flow } from "@heydovetail/ui-components";
import { Flex } from "@heydovetail/ui-components";
import { Container } from "@heydovetail/website/components/layout/Container";
import { HeroText } from "@heydovetail/website/components/site/HeroText";
import { StaffMemberCard } from "@heydovetail/website/components/site/StaffMemberCard";
import { HALF_GAP, PADDING, VERTICAL_GAP, WIDTH } from "@heydovetail/website/constants";
import { locations } from "@heydovetail/website/routing/locations";
import React from "react";
import { Helmet } from "react-helmet";
import { Masonry } from "react-masonry-responsive";
import benjamin from "./benjamin.jpg";
import brad from "./brad.jpg";

export default class extends React.PureComponent {
  public render() {
    return (
      <>
        <Helmet>
          <title>About us – Dovetail</title>
          <meta
            name="description"
            content="Dovetail was created in 2017 by two ex-Atlassians: Benjamin Humphrey and Brad Ayers. We started Dovetail because we believe that deeply understanding one’s customers is the secret ingredient to making great products."
          />
          <meta
            property="og:description"
            content="Dovetail was created in 2017 by two ex-Atlassians: Benjamin Humphrey and Brad Ayers. We started Dovetail because we believe that deeply understanding one’s customers is the secret ingredient to making great products."
          />
        </Helmet>
        <Container styled={{ maxWidth: WIDTH, padding: { x: PADDING, y: HALF_GAP } }}>
          <Flex styled={{ gap: VERTICAL_GAP, layout: "column" }}>
            <Item>
              <Flex styled={{ gap: 32, layout: "column" }}>
                <Item>
                  <HeroText center={false} maxWidth={416} title="About us" />
                </Item>
                <Item>
                  <Flex styled={{ gap: 24, layout: "column" }}>
                    <Item>
                      <p>Dovetail was created in 2017 by two ex-Atlassians: Benjamin Humphrey and Brad Ayers.</p>
                    </Item>
                    <Item>
                      <p>
                        We started Dovetail because we believe that deeply understanding one’s customers is the secret
                        ingredient to making great products. Therefore our mission is to help teams collect, organize, analyze,
                        and collaborate on customer feedback and user research.
                      </p>
                    </Item>
                    <Item>
                      <p>
                        Dovetail has been growing steadily since our initial launch. We now have hundreds of researchers,
                        designers, and product managers using Dovetail worldwide at great organizations like Atlassian, CSIRO,
                        Deloitte, Elsevier, Freshworks, HotelsCombined, Nike, Uniqa, and more.
                      </p>
                    </Item>
                    <Item>
                      <p>We’re based in Sydney, Australia.</p>
                    </Item>
                  </Flex>
                </Item>
                <Item>
                  <Flow>
                    <Item>
                      <ButtonLink color={COLORS.purple} location={locations.blog()}>
                        Visit our blog
                      </ButtonLink>
                    </Item>
                    <Item>
                      <ButtonLink location={locations.slack()}>Join our Slack</ButtonLink>
                    </Item>
                  </Flow>
                </Item>
              </Flex>
            </Item>
            <Item>
              <Flex styled={{ gap: 32, layout: "column" }}>
                <Item>
                  <h2>The founders</h2>
                </Item>
                <Item>
                  <Masonry
                    containerWidth={WIDTH}
                    gap={32}
                    items={[
                      {
                        key: "benjamin",
                        node: (
                          <StaffMemberCard
                            bio="Benjamin is a kiwi designer, developer, and entrepreneur living in Sydney. He loves creating world-class products and believes in the power of user research to do so. Previously Benjamin has led design projects at Atlassian, Delicious, and Ubuntu."
                            image={benjamin}
                            name="Benjamin Humphrey"
                            role="CEO / Designer / Developer"
                          />
                        )
                      },
                      {
                        key: "brad",
                        node: (
                          <StaffMemberCard
                            bio="Brad’s a talented software architect living in Sydney. He has a Bachelor of Engineering from Griffith University and previously worked as an architect at Atlassian. If you’re reading this then the site is up, so well done Brad. Keep it up."
                            image={brad}
                            name="Brad Ayers"
                            role="CTO / Developer"
                          />
                        )
                      }
                    ]}
                    minColumnWidth={300}
                  />
                </Item>
              </Flex>
            </Item>
            <Item>
              <Flex styled={{ gap: 24, layout: "column" }}>
                <Item>
                  <h2>Our philosophy</h2>
                </Item>
                <Item>
                  <p>We’ve been inspired by the values of companies like Atlassian, Basecamp, and Buffer.</p>
                </Item>
                <Item>
                  <p>
                    <b>We’re transparent.</b> We have a public roadmap and Slack workspace. We openly discuss future plans with
                    our customers. We believe in simple and transparent pricing. Our price is always available on our website,
                    and we charge a simple flat monthly fee regardless of organization size.
                  </p>
                </Item>
                <Item>
                  <p>
                    <b>We’re human.</b> We offer trial extensions when you need more time because we understand things don’t
                    happen overnight. We offer refunds if you accidentally forgot to cancel at the beginning of a new billing
                    period. We respect Do Not Track on our website. And we make mistakes, but when we do, we own up to them
                    honestly and try to make amends.
                  </p>
                </Item>
                <Item>
                  <p>
                    <b>We’re focused on the product.</b> Our focus and investment is mostly in product development rather than
                    marketing or sales. We prefer building intuitive experiences over documentation and tutorials. We prefer
                    building a great set of features that “sell themselves” over hiring a sales team. When we do work on things
                    that aren’t the product (for example, this website), we hold ourselves to a high standard.
                  </p>
                </Item>
              </Flex>
            </Item>
          </Flex>
        </Container>
      </>
    );
  }
}
