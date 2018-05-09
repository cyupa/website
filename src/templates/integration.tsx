import { Center } from "@heydovetail/website/components/layout/Center";
import { Flex } from "@heydovetail/website/components/layout/Flex";
import { Flow } from "@heydovetail/website/components/layout/Flow";
import { Item } from "@heydovetail/website/components/layout/Item";
import { FeatureHero } from "@heydovetail/website/components/site/FeatureHero";
import { IntegrationIcon } from "@heydovetail/website/components/site/IntegrationIcon";
import { IntegrationIllustration } from "@heydovetail/website/components/site/IntegrationIllustration";
import { LightContainer } from "@heydovetail/website/components/site/LightContainer";
import { COLORS, PADDING, VERTICAL_GAP, WIDTH } from "@heydovetail/website/constants";
import { IntegrationByPathQuery } from "@heydovetail/website/graphql/types";
import { locations } from "@heydovetail/website/routing/locations";
import { UseCases } from "@heydovetail/website/sections/UseCases";
import { graphql } from "@heydovetail/website/util/graphql";
import { getLoggedInStateFromLocalStorage } from "@heydovetail/website/util/loggedIn";
import React from "react";
import Helmet from "react-helmet";

interface Props {
  data: IntegrationByPathQuery;
}

export default function IntegrationTemplate({ data }: Props) {
  const { integrationsJson } = data;
  const { descriptionPlain, title, steps } = integrationsJson!;
  const from = steps![0]!;
  const to = steps![1]!;
  const description = descriptionPlain!.replace(/\n.*/g, "");
  const titleSansDovetail = title!.replace(/Dovetail notes/g, "notes");
  const loggedIn = getLoggedInStateFromLocalStorage();

  return (
    <>
      <Helmet>
        <title>Connect {from.title} and Dovetail</title>
        <meta name="description" content={description} />
        <meta property="og:description" content={description} />
        <meta property="og:title" content={`Connect ${from.title} and Dovetail`} />
      </Helmet>
      <LightContainer maxWidth={WIDTH} padding={{ x: PADDING, y: VERTICAL_GAP }}>
        <Center>
          <Flex styled={{ gap: 48, layout: "column" }}>
            <Item>
              <Flow styled={{ gap: 32 }}>
                <Item>
                  <IntegrationIcon icon={from.icon!} size={32} />
                </Item>
                <Item>
                  <IntegrationIcon icon={to.icon!} size={32} />
                </Item>
              </Flow>
            </Item>
            <Item>
              <h1>
                {from.title} + Dovetail.<br />Better together.
              </h1>
            </Item>
          </Flex>
        </Center>
      </LightContainer>
      <LightContainer backgroundColor={COLORS.p04} maxWidth={WIDTH} padding={{ x: PADDING, y: VERTICAL_GAP }}>
        <FeatureHero
          image={<IntegrationIllustration color={from.color!} icon={from.icon!} />}
          linkText={loggedIn ? "Configure in Dovetail" : undefined}
          location={loggedIn ? locations.inProductIntegrations() : undefined}
          title={`${titleSansDovetail}.`}
          text={description}
        />
      </LightContainer>
      <LightContainer maxWidth={WIDTH} padding={{ x: PADDING, y: VERTICAL_GAP }}>
        <UseCases showTitle />
      </LightContainer>
    </>
  );
}

export const integrationQuery = graphql`
  query IntegrationByPath($path: String!) {
    integrationsJson(path: { eq: $path }) {
      createUrl
      descriptionPlain
      title
      steps {
        color
        icon
        title
      }
    }
  }
`;
