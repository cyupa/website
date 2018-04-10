import * as React from "React";
import { Helmet } from "react-helmet";
import { Container } from "../components/layout/Container";
import { Footer } from "../components/site/Footer";
import { Header } from "../components/site/Header";
import { TYPICAL_PAGE_WIDTH } from "../constants";
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
          <Container maxWidth={TYPICAL_PAGE_WIDTH} verticalPadding={64}>
            {this.props.children()}
          </Container>
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
