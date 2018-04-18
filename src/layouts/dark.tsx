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
    document.body.style.backgroundColor = COLORS.indigo;
  }

  public render() {
    return (
      <MobileNavigation>
        {api => (
          <div onClick={api.open ? api.onMobileClick : undefined}>
            <Header dark menuOpen={api.open} onMenuToggle={api.onMobileClick} sticky={false} />
            <Site>
              {this.props.children()}
              <Footer dark />
            </Site>
          </div>
        )}
      </MobileNavigation>
    );
  }
}

const Site = styled("div", {
  backgroundColor: COLORS.indigo,
  color: COLORS.white,
  position: "relative",
  overflow: "hidden"
});
