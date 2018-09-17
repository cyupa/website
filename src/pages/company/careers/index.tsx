import { ButtonLink, COLORS, Flex, Flow, Item, SmallText } from "@heydovetail/ui-components";
import { Container } from "@heydovetail/website/components/layout/Container";
import { PageLayout } from "@heydovetail/website/components/layout/PageLayout";
import { Hero } from "@heydovetail/website/components/site/Hero";
import { HALF_GAP, PADDING, VERTICAL_GAP, WIDTH } from "@heydovetail/website/constants";
import { locations } from "@heydovetail/website/routing/locations";
import React from "react";
import { Helmet } from "react-helmet";

export default class extends React.PureComponent {
  public render() {
    const title = "Jobs at Dovetail";
    const description =
      "Build the future of customer feedback and user research as one of our first employees. Work on an exciting, fast growing product with hundreds of happy customers worldwide.";

    return (
      <PageLayout>
        <Helmet>
          <title>{title}</title>
          <meta name="description" content={description} />
          <meta property="og:description" content={description} />
        </Helmet>
        <Container styled={{ maxWidth: WIDTH, padding: { x: PADDING, y: HALF_GAP } }}>
          <Flex styled={{ gap: VERTICAL_GAP, layout: "column" }} style={{ maxWidth: 512 }}>
            <Item>
              <Flex styled={{ gap: 32, layout: "column" }}>
                <Item>
                  <Hero title={title} />
                </Item>
                <Item>
                  <Flex styled={{ gap: 24, layout: "column" }}>
                    <Item>
                      <p>{description}</p>
                    </Item>
                    <Item style={{ marginTop: 64 }}>
                      <h2>Software Engineer</h2>
                    </Item>
                    <Item>
                      <SmallText>Surry Hills, Sydney, Australia</SmallText>
                    </Item>
                    <Item>
                      <p>
                        We started Dovetail because we believe that deeply understanding one’s customers is the secret
                        ingredient to making great products.
                      </p>
                    </Item>
                    <Item>
                      <p>
                        We work on Dovetail because we know now there’s a huge opportunity here, we love crafting delightful
                        experiences, and we genuinely enjoy making products we’re proud of.
                      </p>
                    </Item>
                    <Item>
                      <p>
                        Dovetail has been growing rapidly since we launched the product in late 2017. We now have hundreds of
                        amazing customers like Arm, CSIRO, Deloitte, Harvard, Spotify, and more worldwide.
                      </p>
                    </Item>
                    <Item>
                      <p>
                        Now, we’re looking for people to join us. You should be excited to work at an early stage startup. You
                        should love building great products, writing quality code, and working on the bleeding edge of web tech
                        with TypeScript, React, GraphQL, and ProseMirror.
                      </p>
                    </Item>
                    <Item>
                      <p>
                        As one of the first employees, you will shape not only the product, but also the company culture. We’re
                        not interested in being ‘founder dictators’ – we want to build a healthy team where everyone believes in
                        what they’re working on. As we learn, you will too. You’ll contribute to tough engineering challenges,
                        key business decisions, hiring, management, fundraising, and more.
                      </p>
                    </Item>
                    <Item>
                      <p>Interested? Please get in touch!</p>
                    </Item>
                  </Flex>
                </Item>
                <Item>
                  <ButtonLink color={COLORS.purple} location={locations.email()}>
                    Get in touch
                  </ButtonLink>
                </Item>
              </Flex>
            </Item>
          </Flex>
        </Container>
      </PageLayout>
    );
  }
}
