import * as React from "React";
import { Footer } from "../components/site/Footer";
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
