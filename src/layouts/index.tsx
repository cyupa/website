import { Footer } from "@heydovetail/website/components/site/Footer";
import { Header } from "@heydovetail/website/components/site/Header";
import { MobileNavigation } from "@heydovetail/website/components/site/MobileNavigation";
import { COLORS } from "@heydovetail/website/constants";
import { styled } from "@heydovetail/website/util/styled";
import * as React from "react";
import "../globalstyles";

interface Props {
  children: () => React.ReactNode;
}

export default class extends React.PureComponent<Props> {
  public componentDidMount() {
    document.body.style.backgroundColor = COLORS.white;
  }

  public render() {
    return (
      <MobileNavigation>
        {api => (
          <div onClick={api.open ? api.onMobileClick : undefined}>
            <Header menuOpen={api.open} onMenuToggle={api.onMobileClick} />
            <Site onClick={api.onMobileClick}>
              {this.props.children()}
              <Footer />
            </Site>
          </div>
        )}
      </MobileNavigation>
    );
  }
}

const Site = styled("div", {
  position: "relative",
  overflow: "hidden"
});
