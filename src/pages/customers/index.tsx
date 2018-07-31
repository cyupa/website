import { COLORS, Flex, Item } from "@heydovetail/ui-components";
import * as customers from "@heydovetail/website/components/icons/customers";
import { Center } from "@heydovetail/website/components/layout/Center";
import { HeroText } from "@heydovetail/website/components/site/HeroText";
import { LightContainer } from "@heydovetail/website/components/site/LightContainer";
import { Testimonials } from "@heydovetail/website/components/site/Testimonials";
import { HALF_GAP, testimonials, WIDTH } from "@heydovetail/website/constants";
import { CenteredSignUp } from "@heydovetail/website/sections/CenteredSignUp";
import { CustomerLogos } from "@heydovetail/website/sections/CustomerLogos";
import React from "react";
import { Helmet } from "react-helmet";

export default class extends React.PureComponent {
  public render() {
    const title = "Customers";
    const description =
      "Loved by product managers, designers, and researchers worldwide, from organizations like Atlassian, Deloitte, Engima, HotelsCombined, Westpac, and more.";

    return (
      <>
        <Helmet>
          <title>{title} – Dovetail</title>
          <meta property="og:title" content={`${title} – Dovetail`} />
          <meta name="description" content={description} />
          <meta property="og:description" content={description} />
        </Helmet>
        <LightContainer>
          <HeroText
            center={false}
            text="See how organizations of all shapes and sizes get value from Dovetail."
            title="Customer stories"
          />
        </LightContainer>
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
        </LightContainer>
        <LightContainer>
          <CenteredSignUp />
        </LightContainer>
      </>
    );
  }
}
