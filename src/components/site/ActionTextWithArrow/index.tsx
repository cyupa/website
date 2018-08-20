import { COLORS, Flow, IconArrowRightMini, Item, SubtleButtonLink } from "@heydovetail/ui-components";
import { LocationDescriptor } from "@heydovetail/website/routing/locations";
import React from "react";

interface Props {
  color?: string;
  location?: LocationDescriptor;
  text?: string;
}

export class ActionTextWithArrow extends React.PureComponent<Props> {
  public render() {
    const { color = COLORS.purple, location, text = "Learn more" } = this.props;
    const content = (
      <Flow styled={{ gap: 4 }}>
        <Item>{text}</Item>
        <Item>
          <IconArrowRightMini />
        </Item>
      </Flow>
    );

    if (location !== undefined) {
      return (
        <SubtleButtonLink color={color} location={location}>
          {content}
        </SubtleButtonLink>
      );
    } else return content;
  }
}
