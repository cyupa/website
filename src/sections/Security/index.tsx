import * as React from "react";
import IllustrationSecurity from "../../components/illustrations/IllustrationSecurity";
import { Flex } from "../../components/layout/Flex";
import { Item } from "../../components/layout/Item";
import { FeatureHero } from "../../components/site/FeatureHero";
import { Features } from "../../components/site/Features";
import { TYPICAL_VERTICAL_GAP } from "../../constants";

export class Security extends React.PureComponent {
  public render() {
    return (
      <Flex gap={TYPICAL_VERTICAL_GAP} layout="column">
        <Item>
          <FeatureHero
            image={<IllustrationSecurity />}
            imagePosition="right"
            location="/product/security"
            text="Dovetail is built on modern cloud infrastructure with security features designed to ensure the safety of your data."
            title="We take your privacy and security seriously."
          />
        </Item>
        <Item>
          <Features
            features={[
              {
                text:
                  "Upload a spreadsheet to quickly create notes, tags, or insights. Import images, audio recordings, and video with our bulk file uploader.",
                title: "Data import"
              },
              {
                text:
                  "You own your data. Download PDFs of your notes and insights, and easily export your tags to a spreadsheet for backup or further analysis elsewhere.",
                title: "Data export"
              },
              {
                text:
                  "Dovetail is GDPR compliant with a privacy-by-design architecture, the right to be forgotten, data portability features, and more.",
                title: "GDPR"
              },
              {
                text:
                  "We use Stripe for payments. Stripe has been audited by an independent PCI Qualified Security Assessor and is certified as a PCI Level 1 Service Provider.",
                title: "PCI DSS"
              }
            ]}
            large
          />
        </Item>
      </Flex>
    );
  }
}
