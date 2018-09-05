import { ButtonLink, COLORS, Flex, Flow, Item, LocationLink } from "@heydovetail/ui-components";
import { Container } from "@heydovetail/website/components/layout/Container";
import { PageLayout } from "@heydovetail/website/components/layout/PageLayout";
import { Hero } from "@heydovetail/website/components/site/Hero";
import { StaffMemberCard } from "@heydovetail/website/components/site/StaffMemberCard";
import { Image } from "@heydovetail/website/components/util/Image";
import { HALF_GAP, PADDING, VERTICAL_GAP, WIDTH } from "@heydovetail/website/constants";
import { locations } from "@heydovetail/website/routing/locations";
import React from "react";
import { Helmet } from "react-helmet";
import { Masonry } from "react-masonry-responsive";
import benjamin from "./benjamin.jpg";
import brad from "./brad.jpg";
import map from "./map.png";

export default class extends React.PureComponent {
  public render() {
    const title = "About Dovetail";
    const description =
      "Dovetail was created in 2017 by two ex-Atlassians: Benjamin Humphrey and Brad Ayers. We started Dovetail because we believe that deeply understanding one’s customers is the secret ingredient to making great products.";

    return (
      <PageLayout>
        <Helmet>
          <title>{title}</title>
          <meta name="description" content={description} />
          <meta property="og:description" content={description} />
        </Helmet>
        <Container styled={{ maxWidth: WIDTH, padding: { x: PADDING, y: HALF_GAP } }}>
          <Flex styled={{ gap: VERTICAL_GAP, layout: "column" }}>
            <Item>
              <Flex styled={{ gap: 32, layout: "column" }}>
                <Item>
                  <Hero title={title} />
                </Item>
                <Item>
                  <Flex styled={{ gap: 24, layout: "column" }}>
                    <Item>
                      <p>Dovetail was created in 2017 by two ex-Atlassians: Benjamin Humphrey and Bradley Ayers.</p>
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
                      <ButtonLink location={locations.slack()}>Chat with us on Slack</ButtonLink>
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
                            bio="Benjamin is a designer, developer, and entrepreneur. Benjamin has worked in Australia, New Zealand, and the SF bay area leading projects at Atlassian, Delicious, and Ubuntu."
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
                            bio="Brad’s a software architect living in Sydney. He has a Bachelor of Engineering from Griffith University and previously worked as an architect at Atlassian."
                            image={brad}
                            name="Bradley Ayers"
                            role="CTO / Developer"
                          />
                        )
                      }
                    ]}
                    minColumnWidth={304}
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
            <Item>
              <Flex styled={{ gap: 24, layout: "column" }}>
                <Item>
                  <h2>Our location</h2>
                </Item>
                <Item>
                  <LocationLink location={{ internal: false, url: "https://goo.gl/maps/Zj7xnZzWLYG2", openInNewTab: true }}>
                    <Image src={map} />
                  </LocationLink>
                </Item>
                <Item>
                  <p>
                    <b>Dovetail</b>
                    <br />
                    251 Riley Street
                    <br />
                    Surry Hills NSW 2010
                    <br />
                    Sydney, Australia
                  </p>
                </Item>
              </Flex>
            </Item>
          </Flex>
        </Container>
      </PageLayout>
    );
  }
}
