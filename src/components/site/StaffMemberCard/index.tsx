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
        <Flex styled={{ gap: 32 }}>
          <Item>
            <Image src={image} height={64} rounded width={64} />
          </Item>
          <Item>
            <Flex styled={{ gap: 12, layout: "column" }}>
              <Item style={{ lineHeight: 0 }}>
                <h3>{name}</h3>
              </Item>
              <Item style={{ lineHeight: 0 }}>
                <SmallText>{role}</SmallText>
              </Item>
              <Item>
                <p style={{ fontSize: "14px" }}>{bio}</p>
              </Item>
            </Flex>
          </Item>
        </Flex>
      </Card>
    );
  }
}
