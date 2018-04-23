import * as customers from "@heydovetail/website/components/icons/customers";
import { Center } from "@heydovetail/website/components/layout/Center";
import { Container } from "@heydovetail/website/components/layout/Container";
import { Flex } from "@heydovetail/website/components/layout/Flex";
import { Item } from "@heydovetail/website/components/layout/Item";
import { HeroText } from "@heydovetail/website/components/site/HeroText";
import { LightContainer } from "@heydovetail/website/components/site/LightContainer";
import { Testimonials } from "@heydovetail/website/components/site/Testimonials";
import { COLORS, HALF_GAP, PADDING, VERTICAL_GAP, WIDTH, testimonials } from "@heydovetail/website/constants";
import { CenteredSignUp } from "@heydovetail/website/sections/CenteredSignUp";
import { CustomerLogos } from "@heydovetail/website/sections/CustomerLogos";
import * as React from "react";
import { Helmet } from "react-helmet";

export default class extends React.PureComponent {
  public render() {
    return (
      <>
        <Helmet>
          <title>Our customers – Dovetail</title>
          <meta property="og:title" content="Our customers – Dovetail" />
          <meta name="description" content="Loved by product managers, designers, and researchers worldwide." />
          <meta property="og:description" content="Loved by product managers, designers, and researchers worldwide." />
        </Helmet>
        <Container maxWidth={WIDTH} padding={{ x: PADDING, y: HALF_GAP }}>
          <HeroText
            center={false}
            maxWidth={WIDTH / 2}
            text="Designers, researchers, and product managers from all over the globe use Dovetail to organize and analyze customer feedback and user research."
            title="Our customers"
          />
        </Container>
        <LightContainer backgroundColor={COLORS.teal} maxWidth={WIDTH} padding={{ x: PADDING, y: VERTICAL_GAP }}>
          <CustomerLogos
            color={COLORS.white}
            customers={[
              customers.arm,
              customers.atlassian,
              customers.csiro,
              customers.deloitte,
              customers.elsevier,
              customers.enigma,
              customers.freshworks,
              customers.ftw,
              customers.ideo,
              customers.monotype,
              customers.nike,
              customers.nubank,
              customers.rbs,
              customers.uniqa,
              customers.westpac
            ]}
          />
        </LightContainer>
        <Container maxWidth={WIDTH} padding={{ x: PADDING, y: VERTICAL_GAP }}>
          <Flex gap={HALF_GAP} layout="column">
            <Item>
              <Container maxWidth={WIDTH * 0.75} padding={{ x: 0, y: 0 }}>
                <Center>
                  <h2>Here’s why they love Dovetail.</h2>
                </Center>
              </Container>
            </Item>
            <Item>
              <Testimonials
                testimonials={[
                  testimonials.abhilash,
                  testimonials.aurelia,
                  testimonials.basheera,
                  testimonials.benjamin,
                  testimonials.erik,
                  testimonials.michael,
                  testimonials.pascal,
                  testimonials.sarah,
                  testimonials.sonja,
                  testimonials.tina
                ]}
              />
            </Item>
          </Flex>
        </Container>
        <Container maxWidth={WIDTH} padding={{ x: PADDING, y: HALF_GAP }}>
          <CenteredSignUp />
        </Container>
      </>
    );
  }
}
