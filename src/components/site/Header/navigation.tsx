import {
  BREAKPOINT_TABLET,
  Button,
  ButtonLink,
  COLORS,
  FlipFlop,
  IconChevronDown,
  Layer,
  Portal,
  SubtleButton,
  SubtleButtonLink
} from "@heydovetail/ui-components";
import { Flex } from "@heydovetail/website/components/layout/Flex";
import { Flow } from "@heydovetail/website/components/layout/Flow";
import { Item } from "@heydovetail/website/components/layout/Item";
import { ThemeColor } from "@heydovetail/website/components/site/Header";
import { GoToApp } from "@heydovetail/website/components/site/Header/goToApp";
import { MobileMenu } from "@heydovetail/website/components/site/MobileMenu";
import { WaitForJs } from "@heydovetail/website/components/util/WaitForJs";
import { locations } from "@heydovetail/website/routing/locations";
import { getLoggedInStateFromLocalStorage } from "@heydovetail/website/util/loggedIn";
import React from "react";
import { media } from "typestyle";
import { styled } from "typestyle-react";
import { UseCasesDropdown } from "./UseCasesDropdown";

interface Props {
  dark?: boolean;
}

export class Navigation extends React.PureComponent<Props> {
  public render() {
    const { dark = false } = this.props;
    const loggedIn = getLoggedInStateFromLocalStorage();

    return (
      <>
        <DesktopNavigation>
          <Flex styled={{ gap: 16 }}>
            <Item>
              <Flex styled={{ gap: 4 }}>
                <Item>
                  <FlipFlop>
                    {({ active, toggle }) => (
                      <WaitForJs>
                        <ThemeColor styled={{ dark }}>
                          <SubtleButton id="UseCasesDropdown" onClick={toggle}>
                            <Flow styled={{ gap: 4 }}>
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
                      </WaitForJs>
                    )}
                  </FlipFlop>
                </Item>
                <Item>
                  <ThemeColor styled={{ dark }}>
                    <SubtleButtonLink location={locations.pricing()}>Pricing</SubtleButtonLink>
                  </ThemeColor>
                </Item>
                <Item>
                  <ThemeColor styled={{ dark }}>
                    <SubtleButtonLink location={locations.help()}>Support</SubtleButtonLink>
                  </ThemeColor>
                </Item>
                {loggedIn ? null : (
                  <Item>
                    <ThemeColor styled={{ dark }}>
                      <SubtleButtonLink location={locations.logIn()}>Log in</SubtleButtonLink>
                    </ThemeColor>
                  </Item>
                )}
              </Flex>
            </Item>
            {loggedIn ? (
              <GoToApp />
            ) : (
              <Item>
                <ButtonLink color={!dark ? COLORS.purple : COLORS.p80} height={32} location={locations.signUp()}>
                  Try now
                </ButtonLink>
              </Item>
            )}
          </Flex>
        </DesktopNavigation>
        <MobileNavigation>
          <FlipFlop>
            {({ active, toggle }) => (
              <WaitForJs>
                <Button id="MenuDropdown" height={32} onClick={toggle}>
                  Menu
                </Button>
                {active ? (
                  <Portal>
                    <Layer align="right" onOutsideClick={toggle} parentId="MenuDropdown">
                      <MobileMenu onClose={toggle} loggedIn={loggedIn} />
                    </Layer>
                  </Portal>
                ) : null}
              </WaitForJs>
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
