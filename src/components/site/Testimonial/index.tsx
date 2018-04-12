import { Card } from "@heydovetail/website/components/layout/Card";
import { Flex } from "@heydovetail/website/components/layout/Flex";
import { Item } from "@heydovetail/website/components/layout/Item";
import { styled } from "@heydovetail/website/util/styled";
import * as React from "react";

export interface TestimonialProps {
  company: string;
  image: string;
  name: string;
  quote: string;
  role: string;
}

export class Testimonial extends React.PureComponent<TestimonialProps> {
  public render() {
    const { company, image, name, quote, role } = this.props;

    return (
      <Card padding={32}>
        <Flex gap={24} layout="column">
          <Item>
            <p>“{quote}”</p>
          </Item>
          <Item>
            <Flex alignItems="center" gap={16}>
              <Item style={{ flexGrow: 0, lineHeight: 0 }}>
                <Photo height={32} src={image} width={32} />
              </Item>
              <Item>
                <NameAndRole>
                  {name} — {role} at {company}
                </NameAndRole>
              </Item>
            </Flex>
          </Item>
        </Flex>
      </Card>
    );
  }
}

const Photo = styled("img", {
  borderRadius: "100%",
  height: "32px",
  width: "32px"
});

const NameAndRole = styled("p", {
  fontSize: "12px",
  fontWeight: 500
});
