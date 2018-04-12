import { Footer } from "@heydovetail/website/components/site/Footer";
import { Header } from "@heydovetail/website/components/site/Header";
import { styled } from "@heydovetail/website/util/styled";
import * as React from "react";
import "../globalstyles";

interface Props {
  children: () => React.ReactNode;
}

export default class extends React.PureComponent<Props> {
  public render() {
    return (
      <>
        <Header />
        <Site>
          {this.props.children()}
          <Footer />
        </Site>
      </>
    );
  }
}

const Site = styled("div", {
  position: "relative",
  overflow: "hidden"
});
