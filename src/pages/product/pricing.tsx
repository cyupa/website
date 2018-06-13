import { ButtonLink, COLORS, Flex, Flow, Item, PricingCard } from "@heydovetail/ui-components";
import * as customers from "@heydovetail/website/components/icons/customers";
import { Center } from "@heydovetail/website/components/layout/Center";
import { Container } from "@heydovetail/website/components/layout/Container";
import { Faq } from "@heydovetail/website/components/site/Faq";
import { HeroText } from "@heydovetail/website/components/site/HeroText";
import { LightContainer } from "@heydovetail/website/components/site/LightContainer";
import { ActionTextWithArrow } from "@heydovetail/website/components/util/ActionTextWithArrow";
import { HALF_GAP, MONTHLY_PRICE, MONTHLY_PRICE_IN_CENTS, PADDING, VERTICAL_GAP, WIDTH } from "@heydovetail/website/constants";
import { locations } from "@heydovetail/website/routing/locations";
import { CenteredSignUp } from "@heydovetail/website/sections/CenteredSignUp";
import { CustomerLogos } from "@heydovetail/website/sections/CustomerLogos";
import { FrequentlyAskedQuestions } from "@heydovetail/website/sections/FrequentlyAskedQuestions";
import { TeamSizeSlider } from "@heydovetail/website/sections/TeamSizeSlider";
import React from "react";
import { Helmet } from "react-helmet";

export default class extends React.PureComponent {
  public render() {
    return (
      <>
        <Helmet>
          <title>Pricing – Dovetail</title>
          <meta property="og:title" content="Pricing – Dovetail" />
          <meta
            property="og:description"
            content="Simple, transparent, and affordable pricing. Pay the same price each month regardless of your team size."
          />
          <meta
            name="description"
            content="Simple, transparent, and affordable pricing. Pay the same price each month regardless of your team size."
          />
        </Helmet>
        <Container styled={{ maxWidth: WIDTH, padding: { x: PADDING, y: HALF_GAP } }}>
          <Flex styled={{ gap: VERTICAL_GAP, layout: "column" }}>
            <Item>
              <Flex styled={{ gap: HALF_GAP, layout: "column" }}>
                <Item>
                  <HeroText
                    title="Simple and affordable pricing."
                    text="Pay the same transparent price each month regardless of your team size."
                  />
                </Item>
                <Item>
                  <PricingCard
                    features={[
                      "Unlimited projects",
                      "Unlimited users",
                      "Unlimited integrations",
                      "Premium support",
                      "All features"
                    ]}
                    price={MONTHLY_PRICE_IN_CENTS}
                  />
                </Item>
                <Item>
                  <Center>
                    <Flow>
                      <Item>
                        <ButtonLink color={COLORS.purple} location={locations.signUp()}>
                          Start free trial
                        </ButtonLink>
                      </Item>
                      <Item>
                        <ButtonLink location={locations.demo()}>Book a demo</ButtonLink>
                      </Item>
                    </Flow>
                  </Center>
                </Item>
              </Flex>
            </Item>
          </Flex>
        </Container>
        <LightContainer backgroundColor={COLORS.p04} maxWidth={WIDTH} padding={{ x: PADDING, y: VERTICAL_GAP }}>
          <TeamSizeSlider />
        </LightContainer>
        <Container styled={{ maxWidth: WIDTH, padding: { x: PADDING, y: VERTICAL_GAP } }}>
          <Flex styled={{ gap: VERTICAL_GAP, layout: "column" }}>
            <Item>
              <FrequentlyAskedQuestions
                faqs={[
                  <Faq
                    question="What does “per team” mean?"
                    answer={`You might be used to paying fees or licenses for each of your users. With Dovetail, whether you have 5 or 500 users, the price is always ${MONTHLY_PRICE} / month.`}
                  />,
                  <Faq
                    question="What does “all current &amp; future features” mean?"
                    answer="Cloud-based software means you don’t have to pay to download the latest version. All new features we release are included in your subscription."
                  />,
                  <Faq
                    question="How safe is our data?"
                    answer="We use industry-standard cloud infrastructure along with extra safeguards to ensure your data remains private and secure."
                    location={locations.security()}
                  />,
                  <Faq
                    question="Will we be charged when the trial’s up?"
                    answer="No, we don’t require a card upfront. If you want to continue using Dovetail at the end of your trial, we’ll ask for your credit card then."
                  />,
                  <Faq
                    question="What if we need a longer trial?"
                    answer="We’re happy to extend your trial for as long as you need. Just let us know if you need more time and we’ll sort it out straight away."
                  />,
                  <Faq
                    question="Can we cancel at any time?"
                    answer="Yes. You can cancel your subscription whenever you like, however we do not offer refunds if for a billing period you’ve already paid for."
                  />,
                  <Faq
                    question="Can we pay yearly?"
                    answer="Yes. When upgrading your team, you can choose to pay monthly or yearly. If you’re not sure, you can switch from monthly to yearly billing later on."
                  />,
                  <Faq
                    question="Do you offer product demos?"
                    answer="We sure do. We’re happy to give you a walkthrough over a video call, or if you’re in Sydney, we can pop into your office."
                    location={locations.demo()}
                    linkText="Schedule a demo →"
                  />,
                  <Faq
                    question="How do you compare to similar tools?"
                    answer="Depending on what you’re thinking of, Dovetail might be more collaborative, more intuitive, or cheaper."
                    location={{
                      internal: false,
                      url:
                        "https://www.quora.com/How-does-Dovetail-compare-to-other-research-software-on-the-market/answer/Benjamin-Humphrey",
                      openInNewTab: true
                    }}
                    linkText="Check out our answer on Quora →"
                  />,
                  <Faq
                    question="What’s the catch?"
                    answer="There isn’t one! We’re simply tired of expensive, unintuitive software with lock-in contracts, annoying salespeople, and opaque pricing."
                  />
                ]}
              />
            </Item>
          </Flex>
        </Container>
        <LightContainer backgroundColor={COLORS.teal} maxWidth={WIDTH} padding={{ x: PADDING, y: HALF_GAP }}>
          <Flex styled={{ gap: HALF_GAP, layout: "column" }}>
            <Item>
              <CustomerLogos
                color={COLORS.white}
                customers={[
                  customers.airteam,
                  customers.arm,
                  customers.enigma,
                  customers.freshworks,
                  customers.hotelscombined,
                  customers.monotype,
                  customers.rbs,
                  customers.uniqa
                ]}
              />
            </Item>
            <Item>
              <Center>
                <ActionTextWithArrow color={COLORS.white} location={locations.customers()} text="See our customers" />
              </Center>
            </Item>
          </Flex>
        </LightContainer>
        <Container styled={{ maxWidth: WIDTH, padding: { x: PADDING, y: VERTICAL_GAP } }}>
          <Flex styled={{ gap: VERTICAL_GAP, layout: "column" }}>
            <Item>
              <CenteredSignUp />
            </Item>
          </Flex>
        </Container>
      </>
    );
  }
}
