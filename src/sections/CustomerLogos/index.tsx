import { FlexWrap } from "@heydovetail/website/components/layout/FlexWrap";
import { Item } from "@heydovetail/website/components/layout/Item";
import { COLORS, HALF_GAP } from "@heydovetail/website/constants";
import * as React from "react";

interface Props {
  color?: string;
  customers: React.ReactNode[];
}

export class CustomerLogos extends React.PureComponent<Props> {
  public render() {
    const { color = COLORS.i60, customers } = this.props;
    return (
      <div style={{ color: color }}>
        <FlexWrap gap={HALF_GAP} justifyContent="center">
          {customers.map(c => <Item>{c}</Item>)}
        </FlexWrap>
      </div>
    );
  }
}
