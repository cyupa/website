import { Footer } from "@heydovetail/website/components/site/Footer";
import { Header } from "@heydovetail/website/components/site/Header";
import { COLORS } from "@heydovetail/website/constants";
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
        <Header dark sticky={false} />
        <Site>
          {this.props.children()}
          <Footer dark />
        </Site>
      </>
    );
  }
}

const Site = styled("div", {
  backgroundColor: COLORS.indigo,
  color: COLORS.white,
  position: "relative",
  overflow: "hidden"
});
