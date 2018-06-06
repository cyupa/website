import { ButtonLink, COLORS, Flex, IconArrowRightMini, Item } from "@heydovetail/ui-components";
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
