import { SubtleButtonLink } from "@heydovetail/website/components/forms/SubtleButtonLink";
import IconArrowRightMini from "@heydovetail/website/components/icons/feather/IconArrowRightMini";
import { Flow } from "@heydovetail/website/components/layout/Flow";
import { Item } from "@heydovetail/website/components/layout/Item";
import { LocationDescriptor } from "@heydovetail/website/routing/locations";
import * as React from "react";

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
