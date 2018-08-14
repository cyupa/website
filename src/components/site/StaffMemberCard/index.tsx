import { Flex, Item, SmallText } from "@heydovetail/ui-components";
import { Card } from "@heydovetail/website/components/layout/Card";
import { Image } from "@heydovetail/website/components/util/Image";
import React from "react";

interface Props {
  bio: string;
  image: string;
  name: string;
  role: string;
}

export class StaffMemberCard extends React.PureComponent<Props> {
  public render() {
    const { bio, image, name, role } = this.props;

    return (
      <Card styled={{ padding: 32 }}>
        <Flex styled={{ alignItems: "center", gap: 24, layout: "column" }}>
          <Item style={{ lineHeight: 0 }}>
            <Image src={image} height={128} rounded width={128} />
          </Item>
          <Item>
            <Flex styled={{ alignItems: "center", gap: 16, layout: "column" }}>
              <Item>
                <h3>{name}</h3>
              </Item>
              <Item>
                <SmallText>{role}</SmallText>
              </Item>
              <Item>
                <p style={{ fontSize: "14px", textAlign: "center" }}>{bio}</p>
              </Item>
            </Flex>
          </Item>
        </Flex>
      </Card>
    );
  }
}
