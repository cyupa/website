import { ButtonLink } from "@heydovetail/ui-components";
import { COLORS } from "@heydovetail/ui-components";
import { Flex } from "@heydovetail/ui-components";
import { Item } from "@heydovetail/ui-components";
import IconArrowRightMini from "@heydovetail/website/components/icons/feather/IconArrowRightMini";
import { locations } from "@heydovetail/website/routing/locations";
import React from "react";

export class GoToApp extends React.PureComponent {
  public render() {
    return (
      <ButtonLink color={COLORS.purple} height={32} location={locations.projects()}>
        <Flex styled={{ alignItems: "center", gap: 4 }}>
          <Item>Go to app</Item>
          <Item>
            <IconArrowRightMini />
          </Item>
        </Flex>
      </ButtonLink>
    );
  }
}
