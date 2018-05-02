import { Footer } from "@heydovetail/website/components/site/Footer";
import { Header } from "@heydovetail/website/components/site/Header";
import { DefaultMetaTags } from "@heydovetail/website/components/util/DefaultMetaTags";
import { ErrorBoundary } from "@heydovetail/website/components/util/ErrorBoundary";
import { COLORS } from "@heydovetail/website/constants";
import React from "react";
import { styled } from "typestyle-react";
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
      <ErrorBoundary>
        <DefaultMetaTags />
        <Header dark />
        <Dark>
          {this.props.children()}
          <Footer dark />
        </Dark>
      </ErrorBoundary>
    );
  }
}

const Dark = styled("div", {
  backgroundColor: COLORS.indigo,
  color: COLORS.white,
  overflow: "hidden"
});
