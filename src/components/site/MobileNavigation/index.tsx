import { MobileMenu } from "@heydovetail/website/components/site/MobileMenu";
import { BodyOverflow } from "@heydovetail/website/components/util/BodyOverflow";
import { styled, styledViaProps } from "@heydovetail/website/util/styled";
import * as React from "react";

const MOBILE_NAV_WIDTH = 264;

interface MobileNavigationApi {
  onMobileClick: () => void;
  open: boolean;
}

interface Props {
  children: (api: MobileNavigationApi) => React.ReactNode;
}

interface State {
  open: boolean;
}

export class MobileNavigation extends React.PureComponent<Props, State> {
  public state: State = {
    open: false
  };

  public render() {
    const { children } = this.props;
    const { open } = this.state;

    return (
      <SiteSlider open={open}>
        {children({
          onMobileClick: () => this.setState({ open: !open }),
          open: open
        })}
        <MobileMenuSlider open={open}>
          <MobileMenu onClose={() => this.setState({ open: false })} />
        </MobileMenuSlider>
        {/* {open ? <BodyOverflow /> : null} */}
      </SiteSlider>
    );
  }
}

const SiteSlider = styledViaProps(
  "div",
  ({ open }: { open: boolean }) => JSON.stringify({ open }),
  ({ open }) => ({
    left: open ? -MOBILE_NAV_WIDTH : 0,
    position: "absolute",
    // transform: "translate3d(0 -264px, 0)",
    // transition: "left 350ms cubic-bezier(0.65, 0.05, 0.36, 1)",
    width: "100%"
  })
);

const MobileMenuSlider = styledViaProps(
  "div",
  ({ open }: { open: boolean }) => JSON.stringify({ open }),
  ({ open }) => ({
    right: open ? 0 : -MOBILE_NAV_WIDTH,
    position: "fixed",
    top: 0,
    // transition: "right 350ms cubic-bezier(0.65, 0.05, 0.36, 1)",
    width: MOBILE_NAV_WIDTH
  })
);
