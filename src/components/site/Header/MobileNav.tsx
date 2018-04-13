import { ButtonLink } from "@heydovetail/website/components/forms/ButtonLink";
import { Card } from "@heydovetail/website/components/layout/Card";
import { Flex } from "@heydovetail/website/components/layout/Flex";
import { Item } from "@heydovetail/website/components/layout/Item";
import { Modal } from "@heydovetail/website/components/layout/Modal";
import { BORDER_RADIUS, COLORS, TYPICAL_VERTICAL_GAP } from "@heydovetail/website/constants";
import { LocationLink } from "@heydovetail/website/routing/LocationLink";
import { locations } from "@heydovetail/website/routing/locations";
import { UseCases } from "@heydovetail/website/sections/UseCases";
import * as React from "react";
import { style } from "typestyle/lib";

interface Props {
  onDismiss: () => void;
}

export class MobileNav extends React.PureComponent<Props> {
  public render() {
    return (
      <Modal onDismiss={this.props.onDismiss}>
        <Flex gap={TYPICAL_VERTICAL_GAP / 2} layout="column">
          <Item>
            <Flex gap={24} layout="column">
              <Item>
                <h3>Get started</h3>
              </Item>
              <Item>
                <Card padding={24}>
                  <Flex gap={8}>
                    <Item>
                      <ButtonLink color={COLORS.purple} fullWidth location={locations.signUp()}>
                        Try now
                      </ButtonLink>
                    </Item>
                    <Item>
                      <ButtonLink fullWidth location={locations.logIn()}>
                        Log in
                      </ButtonLink>
                    </Item>
                  </Flex>
                </Card>
              </Item>
            </Flex>
          </Item>
          <Item>
            <Flex gap={24} layout="column">
              <Item>
                <h3>Explore use cases</h3>
              </Item>
              <Item>
                <UseCases />
              </Item>
            </Flex>
          </Item>
          <Item>
            <Flex gap={24} layout="column">
              <Item>
                <h3>Useful links</h3>
              </Item>
              <Item>
                <LocationLink className={linkClassName} location={locations.pricing()}>
                  Pricing
                </LocationLink>
              </Item>
              <Item>
                <LocationLink className={linkClassName} location={locations.help()}>
                  Support
                </LocationLink>
              </Item>
              <Item>
                <LocationLink className={linkClassName} location={locations.legal()}>
                  Legal
                </LocationLink>
              </Item>
            </Flex>
          </Item>
        </Flex>
      </Modal>
    );
  }
}

const linkClassName = style({
  backgroundColor: COLORS.p04,
  borderRadius: BORDER_RADIUS,
  display: "block",
  padding: "24px",

  $nest: {
    "&:hover, &:focus": {
      backgroundColor: COLORS.p08
    }
  }
});
