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
import { GoToApp } from "@heydovetail/website/components/site/Header/goToApp";
import { MobileMenu } from "@heydovetail/website/components/site/MobileMenu";
import { FlipFlop } from "@heydovetail/website/components/util/FlipFlop";
import { BREAKPOINT_TABLET, COLORS } from "@heydovetail/website/constants";
import { locations } from "@heydovetail/website/routing/locations";
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
    const loggedIn = this.getLoggedInStateFromLocalStorage();

    return (
      <>
        <DesktopNavigation>
          <Flex styled={{ gap: 16 }}>
            <Item>
              <Flex styled={{ gap: 4 }}>
                <Item>
                  <FlipFlop>
                    {({ active, toggle }) => (
                      <>
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
                      </>
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
              <>
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
              </>
            )}
          </FlipFlop>
        </MobileNavigation>
      </>
    );
  }

  private readonly getLoggedInStateFromLocalStorage = () => {
    return (
      // tslint:disable-next-line:no-any
      typeof (window as any) !== "undefined" &&
      // tslint:disable-next-line:no-any
      (window.localStorage as any) !== undefined &&
      window.localStorage.getItem("is-logged-in") !== null
    );
  };
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
