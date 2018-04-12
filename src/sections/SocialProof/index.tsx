import { Center } from "@heydovetail/website/components/layout/Center";
import { Flex } from "@heydovetail/website/components/layout/Flex";
import { Item } from "@heydovetail/website/components/layout/Item";
import { Masonry } from "@heydovetail/website/components/layout/Masonry";
import { Testimonial, TestimonialProps } from "@heydovetail/website/components/site/Testimonial";
import { TYPICAL_VERTICAL_GAP } from "@heydovetail/website/constants";
import * as React from "react";
import { Customers } from "../Customers";

interface Props {
  testimonials?: TestimonialProps[];
}

export class SocialProof extends React.PureComponent<Props> {
  public render() {
    const { testimonials } = this.props;

    return (
      <Flex gap={TYPICAL_VERTICAL_GAP * 0.75} layout="column">
        <Item>
          <Center>
            <h2>Trusted by product managers, designers, and researchers around the globe.</h2>
          </Center>
        </Item>
        {testimonials !== undefined ? (
          <Item>
            <Masonry
              gap={32}
              items={testimonials.map((t, i) => ({ id: `${i}`, node: <Testimonial {...t} /> }))}
              minColumnWidth={260}
            />
          </Item>
        ) : null}
        <Item>
          <Customers />
        </Item>
      </Flex>
    );
  }
}
