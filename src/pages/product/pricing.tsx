import * as React from "react";
import { SubtleButton } from "../../components/forms/SubtleButton";
import IconArrowRightMini from "../../components/icons/feather/IconArrowRightMini";
import { Center } from "../../components/layout/Center";
import { Flex } from "../../components/layout/Flex";
import { Flow } from "../../components/layout/Flow";
import { Item } from "../../components/layout/Item";
import { HeroText } from "../../components/site/HeroText";
import { LightContainer } from "../../components/site/LightContainer";
import { PricingCard } from "../../components/site/PricingCard";
import { COLORS, TYPICAL_PAGE_WIDTH, TYPICAL_VERTICAL_GAP } from "../../constants";
import { CenteredSignUp } from "../../sections/CenteredSignUp";
import { FrequentlyAskedQuestions } from "../../sections/FrequentlyAskedQuestions";
import { SocialProof } from "../../sections/SocialProof";
import { UseCases } from "../../sections/UseCases";

export default class extends React.PureComponent {
  public render() {
    return (
      <LightContainer maxWidth={TYPICAL_PAGE_WIDTH} verticalPadding={64}>
        <Flex gap={TYPICAL_VERTICAL_GAP} layout="column">
          <Item>
            <Flex gap={TYPICAL_VERTICAL_GAP / 2} layout="column">
              <Item>
                <HeroText text="Simple and affordable pricing." />
              </Item>
              <Item>
                <PricingCard
                  features={["Unlimited users", "Unlimited integrations", "Unlimited usage", "All current & future features"]}
                  price={4900}
                />
              </Item>
              <Item>
                <Center>
                  <SubtleButton color={COLORS.i60} onClick={() => {}}>
                    <Flow gap={4}>
                      <Item>See all features</Item>
                      <Item>
                        <IconArrowRightMini />
                      </Item>
                    </Flow>
                  </SubtleButton>
                </Center>
              </Item>
            </Flex>
          </Item>
          <Item>
            <Center>
              <h2>Frequently asked questions about pricing.</h2>
            </Center>
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
    );
  }
}
