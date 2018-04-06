import * as React from "react";
import { COLORS } from "../../../constants";
import { styledViaProps } from "../../../util/styled";
import { Button } from "../../forms/Button";
import { SubtleButton } from "../../forms/SubtleButton";
import IconMenu from "../../icons/feather/IconMenu";
import { Flex } from "../../layout/Flex";
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
  theme?: "light" | "dark";
}

export class Header extends React.PureComponent<Props> {
  public render() {
    const { theme = "light" } = this.props;

    return (
      <Sticky stickOnMobile>
        <Wrapper color={theme === "light" ? COLORS.white : COLORS.indigo}>
          <Justify>
            <Item>
              <SubtleButton onClick={() => {}}>
                <DovetailLogo color={theme === "light" ? COLORS.purple : COLORS.white} />
              </SubtleButton>
            </Item>
            <Item>
              <div style={{ color: theme === "light" ? COLORS.i60 : COLORS.i20 }}>
                <Hide device="tablet">
                  <Flex gap={16}>
                    <Item>
                      <Flex gap={8}>
                        <Item>
                          <FlipFlop>
                            {({ active, toggle }) => (
                              <>
                                <SubtleButton id="UseCasesDropdown" onClick={toggle}>
                                  Use cases
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
                          <SubtleButton onClick={() => {}}>Pricing</SubtleButton>
                        </Item>
                        <Item>
                          <SubtleButton onClick={() => {}}>Support</SubtleButton>
                        </Item>
                        <Item>
                          <SubtleButton onClick={() => {}}>Log in</SubtleButton>
                        </Item>
                      </Flex>
                    </Item>
                    <Item>
                      <Button color={theme === "light" ? COLORS.purple : COLORS.p80} height={32} onClick={() => {}}>
                        Sign up
                      </Button>
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
  ({ color }: { color: string }) => JSON.stringify({ color }),
  ({ color }) => ({
    backgroundColor: color,
    padding: "16px 24px"
  })
);
