import * as React from "React";
import { Helmet } from "react-helmet";
import { Header } from "../components/site/Header";
import { COLORS } from "../constants";
import "../globalstyles";
import { styled } from "../util/styled";

interface Props {
  children: () => React.ReactNode;
}

export default class extends React.PureComponent<Props> {
  public render() {
    return (
      <>
        <Helmet>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
          <title>Dovetail – Error</title>
          <link rel="canonical" href="https://dovetailapp.com" />
        </Helmet>
        <Header dark />
        <Site>{this.props.children()}</Site>
      </>
    );
  }
}

const Site = styled("div", {
  backgroundColor: COLORS.indigo,
  color: COLORS.white,
  height: "calc(100vh - 64px)",
  position: "relative",
  overflow: "hidden"
});
