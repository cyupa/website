import { ButtonLink, COLORS, Flex, Flow, Item } from "@heydovetail/ui-components";
import illustrationSecurity from "@heydovetail/website/components/illustrations/security.svg";
import { DarkContainer } from "@heydovetail/website/components/layout/DarkContainer";
import { PageLayout } from "@heydovetail/website/components/layout/PageLayout";
import { Faq } from "@heydovetail/website/components/site/Faq";
import { Features } from "@heydovetail/website/components/site/Features";
import { Hero } from "@heydovetail/website/components/site/Hero";
import { HERO_TEXT_WIDTH, LIGHT_TEXT_OPACITY, WIDTH } from "@heydovetail/website/constants";
import { locations } from "@heydovetail/website/routing/locations";
import { FrequentlyAskedQuestions } from "@heydovetail/website/sections/FrequentlyAskedQuestions";
import { ADVANCED_SECURITY_FEATURES, BASE_SECURITY_FEATURES } from "@heydovetail/website/sections/Security";
import React from "react";
import { Helmet } from "react-helmet";

export default class extends React.PureComponent {
  public render() {
    return (
      <PageLayout dark>
        <Helmet>
          <title>Security and privacy – Dovetail</title>
          <meta property="og:title" content="Security and privacy – Dovetail" />
          <meta
            property="og:description"
            content="Our application is built on world-class, modern cloud infrastructure designed to ensure the safety of your data."
          />
          <meta
            name="description"
            content="Our application is built on world-class, modern cloud infrastructure designed to ensure the safety of your data."
          />
        </Helmet>
        <DarkContainer>
          <Hero
            image={illustrationSecurity}
            maxTextWidth={HERO_TEXT_WIDTH}
            showSignUp={false}
            text={
              <Flex styled={{ gap: 24, layout: "column" }}>
                <Item>
                  <p>
                    We understand you’ll be trusting us with your user research data, including potentially sensitive
                    information about your own customers or participants.
                  </p>
                </Item>
                <Item>
                  <p>
                    Our application is built on world-class, modern cloud infrastructure designed to ensure the safety of your
                    data. We have chosen proven third party cloud providers with a great security track record. We also employ
                    extra measures including regular backups, data encryption, sanitized logging, and common attack prevention.
                  </p>
                </Item>
                <Item>
                  <p>
                    We’re not in the business of selling your data (anonymized or otherwise). You own your data and we will
                    never sell it to third parties. We also won’t look at your data unless you give us permission for a support
                    case.
                  </p>
                </Item>
              </Flex>
            }
            title="Dovetail security and privacy."
          />
          <Features features={[...BASE_SECURITY_FEATURES, ...ADVANCED_SECURITY_FEATURES]} large />
          <FrequentlyAskedQuestions
            faqs={[
              <Faq
                question="Does your software lifecycle include security?"
                answer="Security is integrated into our day-to-day development. We maintain high awareness of potential security issues through code reviews, automated and manual testing, library reviews, and ‘dogfooding’ with a staging environment."
              />,
              <Faq
                question="How do you segregate customers?"
                answer="Individual team membership is enforced through models and controllers. Access to project data is enforced through PostgreSQL Row Level Security (RLS) using transaction-scoped config variables, referenced in RLS policies."
              />,
              <Faq
                question="Is data encrypted in transit over networks?"
                answer="Yes. Data is encrypted while moving between us and your browser with Transport Level Security (TLS). SSL certificates are issued and managed through Amazon Web Services (AWS), and we enable HTTP Strict Transport Security (HSTS)."
              />,
              <Faq
                question="Can staff read customer data?"
                answer="Customer data is hidden and encrypted in the database using database roles. Only founders can access the AWS portal. Our policy is to seek written permission from the customer to view customer data during a support case, if necessary."
              />,
              <Faq
                question="How do you secure user accounts?"
                answer="We employ password strength requirements, Cross-Site Request Forgery (CSRF) protection, secure password reset practices, and log in attempt rate limiting with automated account lockout rules."
              />,
              <Faq
                question="How are passwords stored?"
                answer="Our user authentication system uses BCrypt to hash and salt user passwords. Each password has a uniquely generated salt, and the ‘pepper’ is stored independently from the database."
              />,
              <Faq
                question="Do you track issues in open source software?"
                answer="We employ an automated service called Greenkeeper to stay up-to-date with open source dependencies, and GitHub Security Alerts for vulnerability alerts in dependencies."
              />,
              <Faq
                question="Do you have a point of contact for security?"
                answer="You can email security@dovetailapp.com with any concerns, questions, or vulnerability notices."
              />
            ]}
          />
          <Flex styled={{ gap: 24, layout: "column" }}>
            <Item>
              <p style={{ maxWidth: WIDTH / 2, opacity: LIGHT_TEXT_OPACITY }}>
                Find our privacy policies, terms of service, and list of third party data subprocessors in our legal help
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
        </DarkContainer>
      </PageLayout>
    );
  }
}
