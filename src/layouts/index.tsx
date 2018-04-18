import { Footer } from "@heydovetail/website/components/site/Footer";
import { Header } from "@heydovetail/website/components/site/Header";
import { SiteWrapper } from "@heydovetail/website/components/site/SiteWrapper";
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
      <SiteWrapper>
        {site => (
          <>
            <Header menuOpen={site.open} onMenuToggle={site.toggleMenu} />
            <Light>
              {this.props.children()}
              <Footer />
            </Light>
          </>
        )}
      </SiteWrapper>
    );
  }
}

const Light = styled("div", {
  overflow: "hidden"
});
