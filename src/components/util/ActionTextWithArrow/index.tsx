import { SubtleButtonLink } from "@heydovetail/ui-components";
import { Item } from "@heydovetail/ui-components";
import { Flow } from "@heydovetail/ui-components";
import IconArrowRightMini from "@heydovetail/website/components/icons/feather/IconArrowRightMini";
import { LocationDescriptor } from "@heydovetail/website/routing/locations";
import React from "react";

interface Props {
  location?: LocationDescriptor;
  text?: string;
}

export class ActionTextWithArrow extends React.PureComponent<Props> {
  public render() {
    const { location, text = "Learn more" } = this.props;
    const content = (
      <Flow styled={{ gap: 4 }}>
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
