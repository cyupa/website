import { ButtonLink } from "@heydovetail/website/components/forms/ButtonLink";
import IconArrowRightMini from "@heydovetail/website/components/icons/feather/IconArrowRightMini";
import { Flex } from "@heydovetail/website/components/layout/Flex";
import { Item } from "@heydovetail/website/components/layout/Item";
import { COLORS } from "@heydovetail/website/constants";
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
