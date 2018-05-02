import { Card } from "@heydovetail/website/components/layout/Card";
import { Flex } from "@heydovetail/website/components/layout/Flex";
import { Item } from "@heydovetail/website/components/layout/Item";
import { SmallText } from "@heydovetail/website/components/util/SmallText";
import * as React from "react";

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
            <img src={image} height={128} width={128} style={{ borderRadius: "100%" }} />
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
