import * as React from "react";
import { Helmet } from "react-helmet";
import { ButtonLink } from "../../components/forms/ButtonLink";
import IllustrationSecurity from "../../components/illustrations/IllustrationSecurity";
import { Flex } from "../../components/layout/Flex";
import { Flow } from "../../components/layout/Flow";
import { Item } from "../../components/layout/Item";
import { DarkContainer } from "../../components/site/DarkContainer";
import { Features } from "../../components/site/Features";
import { Hero } from "../../components/site/Hero";
import { COLORS, TYPICAL_PAGE_WIDTH, TYPICAL_VERTICAL_GAP } from "../../constants";
import { locations } from "../../routing/locations";

export const BASE_SECURITY_FEATURES = [
  {
    text:
      "Data is encrypted while moving between us and your browser with Transport Level Security (TLS), and encrypted at rest in our database.",
    title: "Data encryption"
  },
  {
    text:
      "Easily import notes, tags, insights, and files. Download PDFs of your notes and insights and export your tags to a spreadsheet.",
    title: "Import and export"
  },
  {
    text:
      "Dovetail is GDPR compliant with a privacy-by-design architecture, the right to be forgotten, data portability features, and more.",
    title: "GDPR"
  },
  {
    text:
      "Our payments provider Stripe has been audited by an independent PCI Qualified Security Assessor and is certified as a PCI Level 1 Service Provider.",
    title: "PCI DSS"
  }
];

const ADVANCED_SECURITY_FEATURES = [
  {
    text:
      "Our access logic is written in the database. Robust policy-based access controls minimize risk and improve auditing.",
    title: "Database-level security"
  },
  {
    text: "Cross-site request forgery prevention helps to protect users from attacks from other websites they might visit.",
    title: "CSRF prevention"
  }
];

export default class extends React.PureComponent {
  public render() {
    return (
      <>
        <Helmet>
          <title>Security – Dovetail</title>
        </Helmet>
        <Flex gap={TYPICAL_VERTICAL_GAP} layout="column">
          <Item>
            <DarkContainer maxWidth={TYPICAL_PAGE_WIDTH} verticalPadding={TYPICAL_VERTICAL_GAP / 2}>
              <Flex gap={TYPICAL_VERTICAL_GAP} layout="column">
                <Item>
                  <Hero image={<IllustrationSecurity />} showSignUp={false} title="Dovetail security and privacy.">
                    <Flex gap={24} layout="column">
                      <Item>
                        <p>
                          We understand you’ll be trusting us with research and customer feedback data, including potentially
                          sensitive information about your own customers or participants.
                        </p>
                      </Item>
                      <Item>
                        <p>
                          Our application is built on world-class, modern cloud infrastructure designed to ensure the safety of
                          your data. We have chosen proven third party cloud providers with a great security track record. We
                          also employ extra measures including regular backups, data encryption, sanitized logging, and common
                          attack prevention.
                        </p>
                      </Item>
                      <Item>
                        <p>
                          We’re not in the business of selling your data (anonymized or otherwise). You own your data and we
                          will never sell it to third parties. We also won’t look at your data unless you give us permission for
                          a support case.
                        </p>
                      </Item>
                    </Flex>
                  </Hero>
                </Item>
                <Item>
                  <Features features={[...BASE_SECURITY_FEATURES, ...ADVANCED_SECURITY_FEATURES]} large />
                </Item>
                <Item>
                  <Flex gap={24} layout="column">
                    <Item>
                      <p style={{ maxWidth: TYPICAL_PAGE_WIDTH / 2 }}>
                        Find our privacy policy, terms of service, and list of third party data sub-processors in our legal help
                        center.
                      </p>
                    </Item>
                    <Item>
                      <Flow>
                        <Item>
                          <ButtonLink color={COLORS.p80} location={locations.legal()}>
                            Go to legal
                          </ButtonLink>
                        </Item>
                      </Flow>
                    </Item>
                  </Flex>
                </Item>
              </Flex>
            </DarkContainer>
          </Item>
        </Flex>
      </>
    );
  }
}
