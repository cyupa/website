import { ButtonLink } from "@heydovetail/website/components/forms/ButtonLink";
import IllustrationSecurity from "@heydovetail/website/components/illustrations/IllustrationSecurity";
import { Flex } from "@heydovetail/website/components/layout/Flex";
import { Flow } from "@heydovetail/website/components/layout/Flow";
import { Item } from "@heydovetail/website/components/layout/Item";
import { DarkContainer } from "@heydovetail/website/components/site/DarkContainer";
import { Features } from "@heydovetail/website/components/site/Features";
import { Hero } from "@heydovetail/website/components/site/Hero";
import { COLORS, HALF_GAP, PADDING, VERTICAL_GAP, WIDTH } from "@heydovetail/website/constants";
import { locations } from "@heydovetail/website/routing/locations";
import { ADVANCED_SECURITY_FEATURES, BASE_SECURITY_FEATURES } from "@heydovetail/website/sections/Security";
import * as React from "react";
import { Helmet } from "react-helmet";

export default class extends React.PureComponent {
  public render() {
    return (
      <>
        <Helmet>
          <title>Security and privacy – Dovetail</title>
          <meta
            name="description"
            content="Our application is built on world-class, modern cloud infrastructure designed to ensure the safety of your data."
          />
          <meta
            property="og:description"
            content="Our application is built on world-class, modern cloud infrastructure designed to ensure the safety of your data."
          />
          <meta property="og:title" content="Security and privacy – Dovetail" />
        </Helmet>
        <Flex gap={VERTICAL_GAP} layout="column">
          <Item>
            <DarkContainer maxWidth={WIDTH} padding={{ x: PADDING, y: HALF_GAP }}>
              <Flex gap={VERTICAL_GAP} layout="column">
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
                      <p style={{ maxWidth: WIDTH / 2 }}>
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
