import { Button } from "@heydovetail/website/components/forms/Button";
import { ButtonLink } from "@heydovetail/website/components/forms/ButtonLink";
import { SubtleButton } from "@heydovetail/website/components/forms/SubtleButton";
import { SubtleButtonLink } from "@heydovetail/website/components/forms/SubtleButtonLink";
import IconChevronDown from "@heydovetail/website/components/icons/feather/IconChevronDown";
import { Flex } from "@heydovetail/website/components/layout/Flex";
import { Flow } from "@heydovetail/website/components/layout/Flow";
import { Item } from "@heydovetail/website/components/layout/Item";
import { Layer } from "@heydovetail/website/components/layout/Layer";
import { Portal } from "@heydovetail/website/components/layout/Portal";
import { ThemeColor } from "@heydovetail/website/components/site/Header";
import { MobileMenu } from "@heydovetail/website/components/site/MobileMenu";
import { FlipFlop } from "@heydovetail/website/components/util/FlipFlop";
import { BREAKPOINT_TABLET, COLORS } from "@heydovetail/website/constants";
import { locations } from "@heydovetail/website/routing/locations";
import { styled } from "@heydovetail/website/util/styled";
import * as React from "react";
import { media } from "typestyle";
import { UseCasesDropdown } from "./UseCasesDropdown";

interface Props {
  dark?: boolean;
}

export class Navigation extends React.PureComponent<Props> {
  public render() {
    const { dark = false } = this.props;

    return (
      <>
        <DesktopNavigation>
          <Flex gap={16}>
            <Item>
              <Flex gap={4}>
                <Item>
                  <FlipFlop>
                    {({ active, toggle }) => (
                      <>
                        <ThemeColor dark={dark}>
                          <SubtleButton id="UseCasesDropdown" onClick={toggle}>
                            <Flow gap={4}>
                              <Item>Use cases</Item>
                              <Item>
                                <IconChevronDown />
                              </Item>
                            </Flow>
                          </SubtleButton>
                        </ThemeColor>
                        {active ? (
                          <Portal>
                            <Layer align="right" onDismissAttempt={toggle} parentId="UseCasesDropdown">
                              <UseCasesDropdown />
                            </Layer>
                          </Portal>
                        ) : null}
                      </>
                    )}
                  </FlipFlop>
                </Item>
                <Item>
                  <ThemeColor dark={dark}>
                    <SubtleButtonLink location={locations.pricing()}>Pricing</SubtleButtonLink>
                  </ThemeColor>
                </Item>
                <Item>
                  <ThemeColor dark={dark}>
                    <SubtleButtonLink location={locations.help()}>Support</SubtleButtonLink>
                  </ThemeColor>
                </Item>
                <Item>
                  <ThemeColor dark={dark}>
                    <SubtleButtonLink location={locations.logIn()}>Log in</SubtleButtonLink>
                  </ThemeColor>
                </Item>
              </Flex>
            </Item>
            <Item>
              <ButtonLink color={!dark ? COLORS.purple : COLORS.p80} height={32} location={locations.signUp()}>
                Try now
              </ButtonLink>
            </Item>
          </Flex>
        </DesktopNavigation>
        <MobileNavigation>
          <FlipFlop>
            {({ active, toggle }) => (
              <>
                <Button id="MenuDropdown" height={32} onClick={toggle}>
                  Menu
                </Button>
                {active ? (
                  <Portal>
                    <Layer align="right" onOutsideClick={toggle} parentId="MenuDropdown">
                      <MobileMenu onClose={toggle} />
                    </Layer>
                  </Portal>
                ) : null}
              </>
            )}
          </FlipFlop>
        </MobileNavigation>
      </>
    );
  }
}

const DesktopNavigation = styled(
  "div",
  {},
  media(
    { maxWidth: BREAKPOINT_TABLET },
    {
      display: "none"
    }
  )
);

const MobileNavigation = styled(
  "div",
  { display: "none" },
  media(
    { maxWidth: BREAKPOINT_TABLET },
    {
      display: "block"
    }
  )
);
