import { Avatar, Flex, Item } from "@heydovetail/ui-components";
import { LocationLink } from "@heydovetail/ui-components";
import { Card } from "@heydovetail/website/components/layout/Card";
import React from "react";
import { styled } from "typestyle-react";

export interface TestimonialProps {
  company: string;
  image: string;
  name: string;
  quote: string;
  role: string;
  url: string;
}

export class Testimonial extends React.PureComponent<TestimonialProps> {
  public render() {
    const { company, image, name, quote, role, url } = this.props;

    return (
      <Card styled={{ padding: 32 }}>
        <Flex styled={{ gap: 24, layout: "column" }}>
          <Item>
            <p>“{quote}”</p>
          </Item>
          <Item>
            <Flex styled={{ alignItems: "center", gap: 16 }}>
              <Item style={{ flexGrow: 0, lineHeight: 0 }}>
                <Avatar size={32} url={image} />
              </Item>
              <Item>
                <NameAndRole>
                  {name} — {role} at{" "}
                  <LocationLink location={{ internal: false, url: url, openInNewTab: true }} presentation="text">
                    {company}
                  </LocationLink>
                </NameAndRole>
              </Item>
            </Flex>
          </Item>
        </Flex>
      </Card>
    );
  }
}

const NameAndRole = styled("p", {
  fontSize: "12px",
  fontWeight: 500
});
