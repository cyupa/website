import * as abhilash from "@heydovetail/website/avatars/abhilash.jpg";
import * as aurelia from "@heydovetail/website/avatars/aurelia.jpg";
import * as basheera from "@heydovetail/website/avatars/basheera.jpg";
import * as erik from "@heydovetail/website/avatars/erik.jpg";
import * as michael from "@heydovetail/website/avatars/michael.jpg";
import * as pascal from "@heydovetail/website/avatars/pascal.jpg";
import * as tina from "@heydovetail/website/avatars/tina.jpg";
import IllustrationBarChart from "@heydovetail/website/components/illustrations/IllustrationBarChart";
import IllustrationBoard from "@heydovetail/website/components/illustrations/IllustrationBoard";
import IllustrationLineChart from "@heydovetail/website/components/illustrations/IllustrationLineChart";
import IllustrationTeam from "@heydovetail/website/components/illustrations/IllustrationTeam";
import { Container } from "@heydovetail/website/components/layout/Container";
import { Flex } from "@heydovetail/website/components/layout/Flex";
import { Item } from "@heydovetail/website/components/layout/Item";
import { FeatureHero } from "@heydovetail/website/components/site/FeatureHero";
import { HeroText } from "@heydovetail/website/components/site/HeroText";
import { LightContainer } from "@heydovetail/website/components/site/LightContainer";
import { SignupWithEmail } from "@heydovetail/website/components/site/SignupWithEmail";
import { TYPICAL_PAGE_WIDTH, TYPICAL_VERTICAL_GAP } from "@heydovetail/website/constants";
import { locations } from "@heydovetail/website/routing/locations";
import { CenteredSignUp } from "@heydovetail/website/sections/CenteredSignUp";
import { Customers } from "@heydovetail/website/sections/Customers";
import { SocialProof } from "@heydovetail/website/sections/SocialProof";
import { UseCases } from "@heydovetail/website/sections/UseCases";
import * as React from "react";

export default class extends React.PureComponent {
  public render() {
    return (
      <LightContainer maxWidth={TYPICAL_PAGE_WIDTH} verticalPadding={64}>
        <Flex gap={TYPICAL_VERTICAL_GAP} layout="column">
          <Item>
            <Flex gap={32} layout="column">
              <Item>
                <HeroText title="Customer feedback &amp; research software for teams." />
              </Item>
              <Item>
                <Container maxWidth={TYPICAL_PAGE_WIDTH / 2}>
                  <SignupWithEmail />
                </Container>
              </Item>
            </Flex>
          </Item>
          <Item>
            <UseCases />
          </Item>
          <Item>
            <Customers />
          </Item>
          <Item>
            <FeatureHero
              image={<IllustrationLineChart size="100%" />}
              imagePosition="right"
              location={locations.customerFeedback()}
              linkText="Learn more"
              text="Import feedback from hundreds of apps, automatically analyze sentiment, tag feature requests, and measure changes over time."
              title="Understand your customer feedback."
            />
          </Item>
          <Item>
            <FeatureHero
              image={<IllustrationBoard size="100%" />}
              imagePosition="left"
              location={locations.researchRepository()}
              linkText="Learn more"
              text="Save notes, transcripts, and files in one place. Organize everything with projects & boards, and use simple analysis tools to find insights."
              title="Keep all of your research in one place."
            />
          </Item>
          <Item>
            <FeatureHero
              image={<IllustrationBarChart size="100%" />}
              imagePosition="right"
              location={locations.qualitativeDataAnalysis()}
              linkText="Learn more"
              text="Use intuitive analysis tools to identify recurring themes and insights across qualitative data like text, audio, and video."
              title="Analyze qualitative data and uncover insights."
            />
          </Item>
          <Item>
            <FeatureHero
              image={<IllustrationTeam size="100%" />}
              imagePosition="left"
              location={locations.userResearch()}
              linkText="Learn more"
              text="Invite as many people as you like to join projects, browse feedback, collaborate on analysis, and consume insights."
              title="Get everyone onboard."
            />
          </Item>
          <Item>
            <SocialProof
              testimonials={[
                {
                  company: "PageCloud",
                  image: erik,
                  name: "Erik",
                  quote:
                    "Loving the product. Tagging has been a breeze and re-organizing my thoughts using Dovetail has been easier than any other platform I’ve used!",
                  role: "User Researcher"
                },
                {
                  company: "Freshworks",
                  image: abhilash,
                  name: "Abhilash",
                  quote:
                    "My team has started using Dovetail even more and the amount of productivity increase we are witnessing is amazing. The turnaround time for customer interviews to be converted to reports has reduced immensely and the quality of our reports have also improved a lot. Your app is simply too good!",
                  role: "Senior Researcher"
                },
                {
                  company: "MacMillan Learning",
                  image: tina,
                  name: "Tina",
                  quote:
                    "I have to say I am really loving Dovetail and the potential it has in gathering and sharing qualitative data and insights!",
                  role: "UX Designer"
                },
                {
                  company: "Enigma",
                  image: pascal,
                  name: "Pascal",
                  quote:
                    "I just spent the entire day in Dovetail, love it. Looking forward to seeing the evolution of Dovetail and I hope it’s growing.",
                  role: "Design Researcher"
                },
                {
                  company: "Onist",
                  image: michael,
                  name: "Michael",
                  quote:
                    "I’m just loving Dovetail for qualitative user feedback documentation and analysis. It’s just a lovely experience. I don’t know what impresses me more… the app or the team and how they are building it 👏👏👏",
                  role: "VP of Product"
                },
                {
                  company: "DemandLogic",
                  image: basheera,
                  name: "Basheera",
                  quote:
                    "I've got to say, playing around with Dovetail I felt a deep unwinding of tension - it seems like the answer to the need I had for a lightweight but powerful and affordable insights repository that makes the value of qualitative research plain as day.",
                  role: "Design Lead"
                },
                {
                  company: "Pinterest",
                  image: aurelia,
                  name: "Aurelia",
                  quote:
                    "Highlighting text to tag is great! I love that I can add multiple tags to highlighted text. It’s super easy.",
                  role: "UX Researcher"
                }
              ]}
            />
          </Item>
          <Item>
            <CenteredSignUp />
          </Item>
        </Flex>
      </LightContainer>
    );
  }
}
