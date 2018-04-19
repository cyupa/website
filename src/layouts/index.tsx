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
  public componentDidMount() {
    document.body.style.backgroundColor = COLORS.white;
  }

  public render() {
    return (
      <>
        <Header />
        <Light>
          {this.props.children()}
          <Footer />
        </Light>
      </>
    );
  }
}

const Light = styled("div", {
  overflow: "hidden"
});
