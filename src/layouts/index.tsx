import * as React from "React";
import { Helmet } from "react-helmet";
import { Footer } from "../components/site/Footer";
import { Header } from "../components/site/Header";
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
          <title>Dovetail – Customer feedback &amp; research software for teams</title>
          <link rel="canonical" href="https://dovetailapp.com" />
        </Helmet>
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
