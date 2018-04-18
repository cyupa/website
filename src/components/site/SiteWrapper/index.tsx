import { MobileMenu } from "@heydovetail/website/components/site/MobileMenu";
import { styledViaProps } from "@heydovetail/website/util/styled";
import * as React from "react";

const MOBILE_NAV_WIDTH = 272;

interface SiteApi {
  toggleMenu: () => void;
  open: boolean;
}

interface Props {
  children: (api: SiteApi) => React.ReactNode;
}

interface State {
  open: boolean;
}

export class SiteWrapper extends React.PureComponent<Props, State> {
  public state: State = {
    open: false
  };

  public render() {
    const { children } = this.props;
    const { open } = this.state;

    return (
      <Site open={open}>
        <div
          onClick={() => {
            if (open) {
              this.setState({ open: false });
            }
          }}
        >
          {children({
            toggleMenu: () => this.setState({ open: !open }),
            open: open
          })}
        </div>
        <Menu open={open}>
          <MobileMenu onClose={() => this.setState({ open: false })} />
        </Menu>
      </Site>
    );
  }
}

const Site = styledViaProps(
  "div",
  ({ open }: { open: boolean }) => JSON.stringify({ open }),
  ({ open }) => ({
    left: open ? -MOBILE_NAV_WIDTH : 0,
    position: "absolute",
    width: "100%"
  })
);

const Menu = styledViaProps(
  "div",
  ({ open }: { open: boolean }) => JSON.stringify({ open }),
  ({ open }) => ({
    bottom: 0,
    right: open ? 0 : -MOBILE_NAV_WIDTH,
    position: "fixed",
    top: 0,
    width: MOBILE_NAV_WIDTH
  })
);
