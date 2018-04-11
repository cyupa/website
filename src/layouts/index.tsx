import * as React from "React";
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
