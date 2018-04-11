import * as React from "react";
import { COLORS } from "../../../constants";
import { locations } from "../../../routing/locations";
import { styledViaProps } from "../../../util/styled";
import { ButtonLink } from "../../forms/ButtonLink";
import { SubtleButton } from "../../forms/SubtleButton";
import { SubtleButtonLink } from "../../forms/SubtleButtonLink";
import IconChevronDown from "../../icons/feather/IconChevronDown";
import IconMenu from "../../icons/feather/IconMenu";
import { Flex } from "../../layout/Flex";
import { Flow } from "../../layout/Flow";
import { Item } from "../../layout/Item";
import { Justify } from "../../layout/Justify";
import { Layer } from "../../layout/Layer";
import { Portal } from "../../layout/Portal";
import { FlipFlop } from "../../util/FlipFlop";
import { Hide } from "../../util/Hide";
import { Show } from "../../util/Show";
import { Sticky } from "../../util/Sticky";
import DovetailLogo from "./DovetailLogo";
import { MobileNav } from "./MobileNav";
import { UseCasesDropdown } from "./UseCasesDropdown";

interface Props {
  dark?: boolean;
}

export class Header extends React.PureComponent<Props> {
  public render() {
    const { dark = false } = this.props;

    return (
      <Sticky stickOnMobile>
        <Wrapper dark={dark}>
          <Justify>
            <Item>
              <SubtleButtonLink height={40} location={locations.home()}>
                <DovetailLogo color={!dark ? COLORS.purple : COLORS.white} />
              </SubtleButtonLink>
            </Item>
            <Item>
              <div style={{ color: !dark ? COLORS.i60 : COLORS.i20 }}>
                <Hide device="tablet">
                  <Flex gap={16}>
                    <Item>
                      <Flex gap={4}>
                        <Item>
                          <FlipFlop>
                            {({ active, toggle }) => (
                              <>
                                <SubtleButton id="UseCasesDropdown" onClick={toggle}>
                                  <Flow gap={4}>
                                    <Item>Use cases</Item>
                                    <Item>
                                      <IconChevronDown />
                                    </Item>
                                  </Flow>
                                </SubtleButton>
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
                          <SubtleButtonLink location={locations.pricing()}>Pricing</SubtleButtonLink>
                        </Item>
                        <Item>
                          <SubtleButtonLink location={locations.help()}>Support</SubtleButtonLink>
                        </Item>
                        <Item>
                          <SubtleButtonLink location={locations.logIn()}>Log in</SubtleButtonLink>
                        </Item>
                      </Flex>
                    </Item>
                    <Item>
                      <ButtonLink color={!dark ? COLORS.purple : COLORS.p80} height={32} location={locations.signUp()}>
                        Sign up
                      </ButtonLink>
                    </Item>
                  </Flex>
                </Hide>
                <Show device="tablet">
                  <FlipFlop>
                    {({ active, toggle }) => (
                      <>
                        <SubtleButton onClick={toggle}>
                          <IconMenu />
                        </SubtleButton>
                        {active ? <MobileNav onDismiss={toggle} /> : null}
                      </>
                    )}
                  </FlipFlop>
                </Show>
              </div>
            </Item>
          </Justify>
        </Wrapper>
      </Sticky>
    );
  }
}

const Wrapper = styledViaProps(
  "div",
  ({ dark }: { dark: boolean }) => JSON.stringify({ dark }),
  ({ dark }) => ({
    backgroundColor: dark ? COLORS.indigo : COLORS.white,
    padding: "12px 24px"
  })
);
