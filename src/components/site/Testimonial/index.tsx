import { Flex } from "@heydovetail/website/components/layout/Flex";
import { Item } from "@heydovetail/website/components/layout/Item";
import { BORDER_RADIUS, COLORS } from "@heydovetail/website/constants";
import { styled } from "@heydovetail/website/util/styled";
import * as React from "react";

interface Props {
  company: string;
  image: string;
  name: string;
  quote: string;
  role: string;
}

export class Testimonial extends React.PureComponent<Props> {
  public render() {
    const { company, image, name, quote, role } = this.props;

    return (
      <Card>
        <Photo height={48} src={image} width={48} />
        <Flex gap={16} layout="column">
          <Item>
            <NameAndRole>
              {name} — {role} at {company}
            </NameAndRole>
          </Item>
          <Item>
            <p>“{quote}”</p>
          </Item>
        </Flex>
      </Card>
    );
  }
}

const Card = styled("div", {
  backgroundColor: COLORS.p04,
  borderRadius: BORDER_RADIUS,
  padding: "40px 24px 24px",
  position: "relative"
});

const Photo = styled("img", {
  borderRadius: "100%",
  height: "48px",
  position: "absolute",
  left: "24px",
  top: "-24px",
  width: "48px"
});

const NameAndRole = styled("p", {
  fontSize: "12px",
  fontWeight: 500
});
