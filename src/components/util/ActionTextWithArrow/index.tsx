import * as React from "react";
import { LocationDescriptor } from "../../../routing/locations";
import { SubtleButtonLink } from "../../forms/SubtleButtonLink";
import IconArrowRightMini from "../../icons/feather/IconArrowRightMini";
import { Flow } from "../../layout/Flow";
import { Item } from "../../layout/Item";

interface Props {
  location?: LocationDescriptor;
  text?: string;
}

export class ActionTextWithArrow extends React.PureComponent<Props> {
  public render() {
    const { location, text = "Learn more" } = this.props;
    const content = (
      <Flow gap={4}>
        <Item>{text}</Item>
        <Item>
          <IconArrowRightMini />
        </Item>
      </Flow>
    );

    if (location !== undefined) {
      return <SubtleButtonLink location={location}>{content}</SubtleButtonLink>;
    } else return content;
  }
}
