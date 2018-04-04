import * as React from "react";
import { COLORS } from "../../../constants";
import IconArrowRightMini from "../../icons/feather/IconArrowRightMini";
import { Flow } from "../../layout/Flow";
import { Item } from "../../layout/Item";

interface Props {
  text?: string;
}

export class ActionTextWithArrow extends React.PureComponent<Props> {
  public render() {
    const { text = "Learn more" } = this.props;
    return (
      <span style={{ color: COLORS.purple, fontWeight: 500, lineHeight: "24px" }}>
        <Flow gap={4}>
          <Item>{text}</Item>
          <Item>
            <IconArrowRightMini />
          </Item>
        </Flow>
      </span>
    );
  }
}
