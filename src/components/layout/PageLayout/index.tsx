import { COLORS } from "@heydovetail/ui-components";
import { Footer } from "@heydovetail/website/components/site/Footer";
import { Header } from "@heydovetail/website/components/site/Header";
import { ErrorBoundary } from "@heydovetail/website/components/util/ErrorBoundary";
import React from "react";
import "typeface-rubik";
import { styled } from "typestyle-react";
import { DefaultMetaTags } from "./DefaultMetaTags";
import "./globalstyles";

interface Props {
  dark?: boolean;
}

export class PageLayout extends React.PureComponent<Props> {
  public render() {
    const { dark = false } = this.props;

    return (
      <ErrorBoundary>
        <DefaultMetaTags />
        <Header dark={dark} />
        <Wrapper styled={{ dark }}>
          {this.props.children}
          <Footer dark={dark} />
        </Wrapper>
      </ErrorBoundary>
    );
  }
}

const Wrapper = styled("div", ({ dark }: { dark: boolean }) => ({
  backgroundColor: dark ? COLORS.indigo : COLORS.white,
  color: dark ? COLORS.white : COLORS.indigo,
  overflow: "hidden"
}));
