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
    document.body.style.backgroundColor = COLORS.indigo;
  }

  public render() {
    return (
      <SiteWrapper>
        {site => (
          <>
            <Header dark menuOpen={site.open} onMenuToggle={site.toggleMenu} />
            <Dark>
              {this.props.children()}
              <Footer dark />
            </Dark>
          </>
        )}
      </SiteWrapper>
    );
  }
}

const Dark = styled("div", {
  backgroundColor: COLORS.indigo,
  color: COLORS.white,
  overflow: "hidden"
});
