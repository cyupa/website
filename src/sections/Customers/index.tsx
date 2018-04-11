import * as React from "react";
import LogoAtlassian from "../../components/icons/customers/LogoAtlassian";
import LogoCsiro from "../../components/icons/customers/LogoCsiro";
import LogoDeloitte from "../../components/icons/customers/LogoDeloitte";
import LogoEnigma from "../../components/icons/customers/LogoEnigma";
import LogoFreshworks from "../../components/icons/customers/LogoFreshworks";
import LogoNike from "../../components/icons/customers/LogoNike";
import LogoUniqa from "../../components/icons/customers/LogoUniqa";
import LogoWestpac from "../../components/icons/customers/LogoWestpac";
import { GridWrap } from "../../components/layout/GridWrap";
import { Item } from "../../components/layout/Item";

export class Customers extends React.PureComponent {
  public render() {
    return (
      <GridWrap gap={64} justifyContent="center">
        <Item>
          <LogoAtlassian />
        </Item>
        <Item>
          <LogoDeloitte />
        </Item>
        <Item>
          <LogoNike />
        </Item>
        <Item>
          <LogoUniqa />
        </Item>
        <Item>
          <LogoCsiro />
        </Item>
        <Item>
          <LogoEnigma />
        </Item>
        <Item>
          <LogoFreshworks />
        </Item>
        <Item>
          <LogoWestpac />
        </Item>
      </GridWrap>
    );
  }
}
