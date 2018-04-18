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
        <MobileMenuWrapper>
          <MobileMenu onClose={() => this.setState({ open: false })} />
        </MobileMenuWrapper>
        {/* {open ? <BodyOverflow /> : null} */}
      </SiteSlider>
    );
  }
}

const SiteSlider = styledViaProps(
  "div",
  ({ open }: { open: boolean }) => JSON.stringify({ open }),
  ({ open }) => ({
    transform: open ? `translateX(-${MOBILE_NAV_WIDTH}px)` : undefined,
    transition: "transform 350ms cubic-bezier(0.65, 0.05, 0.36, 1)"
  })
);

const MobileMenuWrapper = styled("div", {
  position: "fixed",
  right: 0,
  top: 0,
  transform: `translateX(${MOBILE_NAV_WIDTH}px)`,
  width: MOBILE_NAV_WIDTH
});
