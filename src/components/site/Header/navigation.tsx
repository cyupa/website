import {
  BREAKPOINT_TABLET,
  Button,
  ButtonLink,
  COLORS,
  Flex,
  Flow,
  IconChevronDownMini,
  Item,
  Menu,
  SubtleButton,
  SubtleButtonLink
} from "@heydovetail/ui-components";
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
                  <WaitForJs>
                    <Menu
                      align="right"
                      trigger={props => (
                        <ThemeColor styled={{ dark }}>
                          <SubtleButton {...props}>
                            <Flow styled={{ gap: 4 }}>
                              <Item>Use cases</Item>
                              <Item>
                                <IconChevronDownMini />
                              </Item>
                            </Flow>
                          </SubtleButton>
                        </ThemeColor>
                      )}
                    >
                      {({ dismiss }) => <UseCasesDropdown onDismiss={dismiss} />}
                    </Menu>
                  </WaitForJs>
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
          <WaitForJs>
            <Menu
              align="right"
              trigger={props => (
                <Button height={32} {...props}>
                  Menu
                </Button>
              )}
            >
              {({ dismiss }) => <MobileMenu onClose={dismiss} loggedIn={loggedIn} />}
            </Menu>
          </WaitForJs>
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
