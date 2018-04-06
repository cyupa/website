import * as React from "react";
import LogoAtlassian from "../../components/icons/customers/LogoAtlassian";
import LogoCsiro from "../../components/icons/customers/LogoCsiro";
import LogoDeloitte from "../../components/icons/customers/LogoDeloitte";
import LogoEnigma from "../../components/icons/customers/LogoEnigma";
import LogoFreshworks from "../../components/icons/customers/LogoFreshworks";
import LogoNike from "../../components/icons/customers/LogoNike";
import LogoUniqa from "../../components/icons/customers/LogoUniqa";
import LogoWestpac from "../../components/icons/customers/LogoWestpac";
import { COLORS } from "../../constants";
import { styled } from "../../util/styled";

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
          <LogoWestpac />
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
