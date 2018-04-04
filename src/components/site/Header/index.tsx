import * as React from "react";
import { COLORS } from "../../../constants";
import { Button } from "../../forms/Button";
import { SubtleButton } from "../../forms/SubtleButton";
import { Container } from "../../layout/Container";
import { Flex } from "../../layout/Flex";
import { Item } from "../../layout/Item";
import { Justify } from "../../layout/Justify";
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
                <Item>
                  <Button color={COLORS.purple} height={32} onClick={() => {}}>
                    Sign up
                  </Button>
                </Item>
              </Flex>
            </div>
          </Item>
        </Justify>
      </Container>
    );
  }
}
