import { SubtleButtonLink } from "@heydovetail/website/components/forms/SubtleButtonLink";
import IconArrowRightMini from "@heydovetail/website/components/icons/feather/IconArrowRightMini";
import { Center } from "@heydovetail/website/components/layout/Center";
import { Flex } from "@heydovetail/website/components/layout/Flex";
import { Flow } from "@heydovetail/website/components/layout/Flow";
import { Item } from "@heydovetail/website/components/layout/Item";
import { HeroText } from "@heydovetail/website/components/site/HeroText";
import { LightContainer } from "@heydovetail/website/components/site/LightContainer";
import { PricingCard } from "@heydovetail/website/components/site/PricingCard";
import { COLORS, TYPICAL_PAGE_WIDTH, TYPICAL_VERTICAL_GAP } from "@heydovetail/website/constants";
import { locations } from "@heydovetail/website/routing/locations";
import { CenteredSignUp } from "@heydovetail/website/sections/CenteredSignUp";
import { FrequentlyAskedQuestions } from "@heydovetail/website/sections/FrequentlyAskedQuestions";
import { SocialProof } from "@heydovetail/website/sections/SocialProof";
import { UseCases } from "@heydovetail/website/sections/UseCases";
import * as React from "react";
import { Helmet } from "react-helmet";

export default class extends React.PureComponent {
  public render() {
    return (
      <>
        <Helmet>
          <title>Pricing – Dovetail</title>
          <meta name="description" content="Simple and affordable pricing." />
          <meta property="og:description" content="Simple and affordable pricing." />
          <meta property="og:title" content="Pricing – Dovetail" />
        </Helmet>
        <LightContainer maxWidth={TYPICAL_PAGE_WIDTH} verticalPadding={64}>
          <Flex gap={TYPICAL_VERTICAL_GAP} layout="column">
            <Item>
              <Flex gap={TYPICAL_VERTICAL_GAP / 2} layout="column">
                <Item>
                  <HeroText title="Simple and affordable pricing." />
                </Item>
                <Item>
                  <PricingCard
                    features={["Unlimited users", "Unlimited integrations", "Unlimited usage", "All current & future features"]}
                    price={4900}
                  />
                </Item>
                <Item>
                  <Center>
                    <SubtleButtonLink color={COLORS.i60} location={locations.features()}>
                      <Flow gap={4}>
                        <Item>See all features</Item>
                        <Item>
                          <IconArrowRightMini />
                        </Item>
                      </Flow>
                    </SubtleButtonLink>
                  </Center>
                </Item>
              </Flex>
            </Item>
            <Item>
              <FrequentlyAskedQuestions />
            </Item>
            <Item>
              <SocialProof />
            </Item>
            <Item>
              <UseCases showTitle />
            </Item>
            <Item>
              <CenteredSignUp />
            </Item>
          </Flex>
        </LightContainer>
      </>
    );
  }
}
