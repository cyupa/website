import { Footer } from "@heydovetail/website/components/site/Footer";
import { Header } from "@heydovetail/website/components/site/Header";
import { DefaultMetaTags } from "@heydovetail/website/components/util/DefaultMetaTags";
import { ErrorBoundary } from "@heydovetail/website/components/util/ErrorBoundary";
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
      <ErrorBoundary>
        <DefaultMetaTags />
        <Header />
        <Light>
          {this.props.children()}
          <Footer />
        </Light>
      </ErrorBoundary>
    );
  }
}

const Light = styled("div", {
  overflow: "hidden"
});
