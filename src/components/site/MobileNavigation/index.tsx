import { MobileMenu } from "@heydovetail/website/components/site/MobileMenu";
import { BOX_SHADOW_LIFTED } from "@heydovetail/website/constants";
import { styled, styledViaProps } from "@heydovetail/website/util/styled";
import * as React from "react";

interface MobileNavigationApi {
  onMobileClick: () => void;
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

    return (
      <>
        {this.state.open ? (
          <MenuWrapper>
            <MobileMenu />
          </MenuWrapper>
        ) : null}
        <Offset offset={this.state.open}>
          {children({
            onMobileClick: () => this.setState({ open: !this.state.open })
          })}
        </Offset>
      </>
    );
  }
}

const Offset = styledViaProps(
  "div",
  ({ offset }: { offset: boolean }) => JSON.stringify({ offset }),
  ({ offset }) => ({
    boxShadow: offset ? BOX_SHADOW_LIFTED : undefined,
    overflow: offset ? "hidden" : undefined,
    transform: offset ? "translate(-80%, 0)" : undefined,
    transformOrigin: "top",
    transition: "transform 500ms cubic-bezier(0.65, 0.05, 0.36, 1)"
  })
);

const MenuWrapper = styled("div", {
  marginLeft: "25%",
  marginTop: "16px",
  position: "absolute"
});
