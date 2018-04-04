import * as React from "react";
import { COLORS } from "../../../constants";
import { styled } from "../../../util/styled";
import LogoAtlassian from "./LogoAtlassian";
import LogoCsiro from "./LogoCsiro";
import LogoDeloitte from "./LogoDeloitte";
import LogoEnigma from "./LogoEnigma";
import LogoFreshworks from "./LogoFreshworks";
import LogoIdeo from "./LogoIdeo";
import LogoNike from "./LogoNike";
import LogoUniqa from "./LogoUniqa";

export class Customers extends React.PureComponent {
  public render() {
    return (
      <Wrapper>
        <Logo>
          <LogoAtlassian />
        </Logo>
        <Logo>
          <LogoDeloitte />
        </Logo>
        <Logo>
          <LogoNike />
        </Logo>
        <Logo>
          <LogoUniqa />
        </Logo>
        <Logo>
          <LogoCsiro />
        </Logo>
        <Logo>
          <LogoEnigma />
        </Logo>
        <Logo>
          <LogoFreshworks />
        </Logo>
        <Logo>
          <LogoIdeo />
        </Logo>
      </Wrapper>
    );
  }
}

const Wrapper = styled("div", {
  color: COLORS.i80,
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  margin: "-32px"
});

const Logo = styled("div", {
  margin: "32px"
});
