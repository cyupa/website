import * as React from "react";
import { COLORS } from "../../../constants";
import { styled } from "../../../util/styled";
import { Button } from "../../forms/Button";
import { SubtleButton } from "../../forms/SubtleButton";
import IconMenu from "../../icons/feather/IconMenu";
import { Flex } from "../../layout/Flex";
import { Item } from "../../layout/Item";
import { Justify } from "../../layout/Justify";
import { FlipFlop } from "../../util/FlipFlop";
import { Hide } from "../../util/Hide";
import { Show } from "../../util/Show";
import { Sticky } from "../../util/Sticky";
import { MobileNav } from "../MobileNav";
import Logo from "./Logo";

export class Header extends React.PureComponent {
  public render() {
    return (
      <Sticky stickOnMobile>
        <Wrapper>
          <Justify>
            <Item>
              <SubtleButton onClick={() => {}}>
                <Logo />
              </SubtleButton>
            </Item>
            <Item>
              <div style={{ color: COLORS.i60 }}>
                <Hide device="tablet">
                  <Flex gap={16}>
                    <Item>
                      <Flex gap={8}>
                        <Item>
                          <SubtleButton onClick={() => {}}>Use cases</SubtleButton>
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
                      <Button color={COLORS.purple} height={32} onClick={() => {}}>
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

const Wrapper = styled("div", {
  backgroundColor: COLORS.white,
  padding: "16px 24px"
});
