import { COLORS, Flex, Item } from "@heydovetail/ui-components";
import * as customers from "@heydovetail/website/components/icons/customers";
import { Center } from "@heydovetail/website/components/layout/Center";
import { Container } from "@heydovetail/website/components/layout/Container";
import { HeroText } from "@heydovetail/website/components/site/HeroText";
import { LightContainer } from "@heydovetail/website/components/site/LightContainer";
import { Testimonials } from "@heydovetail/website/components/site/Testimonials";
import { HALF_GAP, PADDING, testimonials, WIDTH } from "@heydovetail/website/constants";
import { CenteredSignUp } from "@heydovetail/website/sections/CenteredSignUp";
import { CustomerLogos } from "@heydovetail/website/sections/CustomerLogos";
import React from "react";
import { Helmet } from "react-helmet";

export default class extends React.PureComponent {
  public render() {
    return (
      <>
        <Helmet>
          <title>Our customers – Dovetail</title>
          <meta property="og:title" content="Our customers – Dovetail" />
          <meta
            name="description"
            content="Loved by product managers, designers, and researchers worldwide, from organizations like Atlassian, Deloitte, Engima, HotelsCombined, Westpac, and more."
          />
          <meta
            property="og:description"
            content="Loved by product managers, designers, and researchers worldwide, from organizations like Atlassian, Deloitte, Engima, HotelsCombined, Westpac, and more."
          />
        </Helmet>
        <Container styled={{ maxWidth: WIDTH, padding: { x: PADDING, y: HALF_GAP } }}>
          <HeroText
            center={false}
            maxWidth={WIDTH / 2}
            text="Designers, researchers, and product managers from all over the globe use Dovetail to organize and analyze customer feedback and user research."
            title="Our customers"
          />
        </Container>
        <LightContainer backgroundColor={COLORS.teal}>
          <CustomerLogos
            color={COLORS.white}
            customers={[
              customers.airteam,
              customers.arm,
              customers.atlassian,
              customers.barnardos,
              customers.bcg,
              customers.careship,
              customers.csiro,
              customers.deloitte,
              customers.elsevier,
              customers.enigma,
              customers.freshworks,
              customers.ftw,
              customers.harvard,
              customers.hotelscombined,
              customers.ideo,
              customers.kickstand,
              customers.monotype,
              customers.nike,
              customers.nubank,
              customers.ocado,
              customers.pearson,
              customers.rbs,
              customers.rmit,
              customers.schibsted,
              customers.scout24,
              customers.spotify,
              customers.uniqa,
              customers.westpac
            ]}
          />
        </LightContainer>
        <LightContainer>
          <Flex styled={{ gap: HALF_GAP, layout: "column" }}>
            <Item>
              <Center>
                <h2>Here’s why they love Dovetail.</h2>
              </Center>
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
                  testimonials.sophie,
                  testimonials.tina
                ]}
              />
            </Item>
          </Flex>
          <CenteredSignUp />
        </LightContainer>
      </>
    );
  }
}
