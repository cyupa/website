import { COLORS } from "@heydovetail/ui-components";
import IllustrationSecurity from "@heydovetail/website/components/illustrations/IllustrationSecurity";
import { FeatureHero } from "@heydovetail/website/components/site/FeatureHero";
import { Features } from "@heydovetail/website/components/site/Features";
import { HALF_GAP } from "@heydovetail/website/constants";
import { locations } from "@heydovetail/website/routing/locations";
import React from "react";

export const BASE_SECURITY_FEATURES = [
  {
    text:
      "Data is encrypted while moving between us and your browser with Transport Level Security (TLS), and encrypted at rest in our database.",
    title: "Data encryption"
  },
  {
    text:
      "Easily import notes, tags, and insights. Download PDFs of your notes and insights and export your tags to a spreadsheet.",
    title: "Import and export"
  },
  {
    text:
      "Dovetail is GDPR ready with a privacy-by-design architecture, clear privacy policies, and features to help users manage their personal information.",
    title: "GDPR"
  },
  {
    text:
      "Our payments provider Stripe has been audited by an independent PCI Qualified Security Assessor and is certified as a PCI Level 1 Service Provider.",
    title: "PCI DSS"
  }
];

export const ADVANCED_SECURITY_FEATURES = [
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

export class Security extends React.PureComponent {
  public render() {
    return (
      // Offset the padding baked into <FeatureHero />
      <div style={{ marginTop: -HALF_GAP }}>
        <FeatureHero
          color={COLORS.p40}
          image={<IllustrationSecurity size="100%" />}
          imagePosition="right"
          location={locations.security()}
          linkText="Learn more"
          text="Dovetail is built on modern cloud infrastructure with privacy and security features designed to ensure the safety of your data."
          title="We take your privacy and security seriously."
        />
        <Features features={BASE_SECURITY_FEATURES} large />
      </div>
    );
  }
}
