import * as React from "react";
import IllustrationSecurity from "../../components/illustrations/IllustrationSecurity";
import { Flex } from "../../components/layout/Flex";
import { Item } from "../../components/layout/Item";
import { FeatureHero } from "../../components/site/FeatureHero";
import { Features } from "../../components/site/Features";
import { TYPICAL_VERTICAL_GAP } from "../../constants";
import { BASE_SECURITY_FEATURES } from "../../pages/product/security";
import { locations } from "../../routing/locations";

export class Security extends React.PureComponent {
  public render() {
    return (
      <Flex gap={TYPICAL_VERTICAL_GAP / 2} layout="column">
        <Item>
          <FeatureHero
            image={<IllustrationSecurity />}
            imagePosition="right"
            location={locations.security()}
            linkText="Learn more"
            text="Dovetail is built on modern cloud infrastructure with privacy and security features designed to ensure the safety of your data."
            title="We take your privacy and security seriously."
          />
        </Item>
        <Item>
          <Features features={BASE_SECURITY_FEATURES} large />
        </Item>
      </Flex>
    );
  }
}
