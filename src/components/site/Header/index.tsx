import * as React from "react";
import { COLORS } from "../../../constants";
import { Button } from "../../forms/Button";
import { SubtleButton } from "../../forms/SubtleButton";
import IconMenu from "../../icons/feather/IconMenu";
import { Container } from "../../layout/Container";
import { Flex } from "../../layout/Flex";
import { Item } from "../../layout/Item";
import { Justify } from "../../layout/Justify";
import { FlipFlop } from "../../util/FlipFlop";
import { Hide } from "../../util/Hide";
import { Show } from "../../util/Show";
import { MobileNav } from "../MobileNav";
import Logo from "./Logo";

export class Header extends React.PureComponent {
  public render() {
    return (
      <Container horizontalPadding={24} verticalPadding={24}>
        <Justify>
          <Item>
            <SubtleButton onClick={() => {}}>
              <Logo />
            </SubtleButton>
          </Item>
          <Item>
            <div style={{ color: COLORS.i60 }}>
              <Flex gap={16}>
                <Hide device="tablet">
                  <Item>
                    <Flex>
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
                </Hide>
                <Item>
                  <Button color={COLORS.purple} height={32} onClick={() => {}}>
                    Sign up
                  </Button>
                </Item>
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
              </Flex>
            </div>
          </Item>
        </Justify>
      </Container>
    );
  }
}
