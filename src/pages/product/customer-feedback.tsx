import * as React from "react";
import IllustrationForm from "../../components/illustrations/IllustrationForm";
import IllustrationSpace from "../../components/illustrations/IllustrationSpace";
import { Flex } from "../../components/layout/Flex";
import { Item } from "../../components/layout/Item";
import { FeatureHero } from "../../components/site/FeatureHero";
import { FeatureHeroLarge } from "../../components/site/FeatureHeroLarge";
import { Features } from "../../components/site/Features";
import { Hero } from "../../components/site/Hero";
import { TYPICAL_VERTICAL_GAP } from "../../constants";
import { Integrations } from "../../sections/Integrations";

export default class extends React.PureComponent {
  public render() {
    return (
      <Flex gap={TYPICAL_VERTICAL_GAP} layout="column">
        <Item>
          <Hero image={<IllustrationSpace />} title="Keep all of your customer feedback in one place." />
        </Item>
        <Item>
          <FeatureHeroLarge
            center={false}
            image={<Integrations />}
            text="Import emails, survey results, support tickets, tweets, Facebook posts, and app reviews via Zapier."
            title="Centralize feedback from thousands of apps."
          />
        </Item>
        <Item>
          <FeatureHero
            image={<IllustrationForm />}
            imagePosition="left"
            text="Create a feedback form and get feedback directly from users. Theme it to match your brand without needing a developer."
            title="Customize your own feedback form."
          />
        </Item>
        <Item>
          <Features
            features={[
              {
                text: "Import customer feedback from thousands of apps",
                title: "Zapier integration"
              },
              {
                text: "Add simple feedback forms to your website or product",
                title: "Embeddable form"
              },
              {
                text: "Bulk import customer feedback from a spreadsheet",
                title: "Spreadsheet upload"
              }
            ]}
          />
        </Item>
      </Flex>
    );
  }
}
