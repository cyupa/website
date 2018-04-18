import { SubtleButtonLink } from "@heydovetail/website/components/forms/SubtleButtonLink";
import { Item } from "@heydovetail/website/components/layout/Item";
import { Justify } from "@heydovetail/website/components/layout/Justify";
import { Navigation } from "@heydovetail/website/components/site/Header/navigation";
import { Sticky } from "@heydovetail/website/components/util/Sticky";
import { COLORS } from "@heydovetail/website/constants";
import { locations } from "@heydovetail/website/routing/locations";
import { styledViaProps } from "@heydovetail/website/util/styled";
import * as React from "react";
import DovetailLogo from "./DovetailLogo";

interface Props {
  dark?: boolean;
  menuOpen: boolean;
  onMenuToggle: () => void;
  sticky?: boolean;
}

export class Header extends React.PureComponent<Props> {
  public render() {
    const { dark = false, sticky = true } = this.props;

    const header = (
      <Wrapper dark={dark}>
        <Justify>
          <Item style={{ marginLeft: "-8px" }}>
            <ThemeColor dark={dark}>
              <SubtleButtonLink height={40} location={locations.home()}>
                <DovetailLogo color={dark ? COLORS.white : COLORS.purple} />
              </SubtleButtonLink>
            </ThemeColor>
          </Item>
          <Item>
            <Navigation {...this.props} />
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

const Wrapper = styledViaProps(
  "div",
  ({ dark }: { dark: boolean }) => JSON.stringify({ dark }),
  ({ dark }) => ({
    backgroundColor: dark ? COLORS.indigo : COLORS.white,
    color: COLORS.i60,
    padding: "16px 24px"
  })
);

export const ThemeColor = styledViaProps(
  "div",
  ({ dark }: { dark: boolean }) => JSON.stringify({ dark }),
  ({ dark }) => ({
    color: dark ? COLORS.white : COLORS.i60,
    opacity: dark ? 0.9 : 1.0,

    $nest: {
      "&:hover": {
        color: dark ? COLORS.white : COLORS.purple,
        opacity: 1.0
      }
    }
  })
);
