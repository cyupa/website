import LogoAtlassian from "@heydovetail/website/components/icons/customers/LogoAtlassian";
import LogoCsiro from "@heydovetail/website/components/icons/customers/LogoCsiro";
import LogoDeloitte from "@heydovetail/website/components/icons/customers/LogoDeloitte";
import LogoEnigma from "@heydovetail/website/components/icons/customers/LogoEnigma";
import LogoFreshworks from "@heydovetail/website/components/icons/customers/LogoFreshworks";
import LogoNike from "@heydovetail/website/components/icons/customers/LogoNike";
import LogoUniqa from "@heydovetail/website/components/icons/customers/LogoUniqa";
import LogoWestpac from "@heydovetail/website/components/icons/customers/LogoWestpac";
import { GridWrap } from "@heydovetail/website/components/layout/GridWrap";
import { Item } from "@heydovetail/website/components/layout/Item";
import { COLORS } from "@heydovetail/website/constants";
import * as React from "react";

export class Customers extends React.PureComponent {
  public render() {
    return (
      <div style={{ color: COLORS.i60 }}>
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
      </div>
    );
  }
}
