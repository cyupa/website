import { SubtleButtonLink } from "@heydovetail/website/components/forms/SubtleButtonLink";
import { Item } from "@heydovetail/website/components/layout/Item";
import { Justify } from "@heydovetail/website/components/layout/Justify";
import { Navigation } from "@heydovetail/website/components/site/Header/navigation";
import { Sticky } from "@heydovetail/website/components/util/Sticky";
import { COLORS } from "@heydovetail/website/constants";
import { locations } from "@heydovetail/website/routing/locations";
import React from "react";
import { styled } from "typestyle-react";
import DovetailLogo from "./DovetailLogo";

interface Props {
  dark?: boolean;
  sticky?: boolean;
}

export class Header extends React.PureComponent<Props> {
  public render() {
    const { dark = false, sticky = true } = this.props;

    const header = (
      <Wrapper styled={{ dark }}>
        <Justify>
          <Item style={{ marginLeft: "-8px" }}>
            <ThemeColor styled={{ dark }}>
              <SubtleButtonLink height={40} location={locations.home()}>
                <DovetailLogo color={dark ? COLORS.white : COLORS.purple} />
              </SubtleButtonLink>
            </ThemeColor>
          </Item>
          <Item>
            <Navigation dark={dark} />
          </Item>
        </Justify>
      </Wrapper>
    );

    if (sticky) {
      return <Sticky stickOnMobile>{header}</Sticky>;
    } else {
      return header;
    }
  }
}

const Wrapper = styled("div", ({ dark }: { dark: boolean }) => ({
  backgroundColor: dark ? COLORS.indigo : COLORS.white,
  color: COLORS.i60,
  padding: "16px 24px"
}));

export const ThemeColor = styled("div", ({ dark }: { dark: boolean }) => ({
  color: dark ? COLORS.white : COLORS.i60,
  opacity: dark ? 0.9 : 1.0,

  $nest: {
    "&:hover": {
      color: dark ? COLORS.white : COLORS.purple,
      opacity: 1.0
    }
  }
}));
