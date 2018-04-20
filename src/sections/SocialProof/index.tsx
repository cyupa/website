import { Center } from "@heydovetail/website/components/layout/Center";
import { Container } from "@heydovetail/website/components/layout/Container";
import { Flex } from "@heydovetail/website/components/layout/Flex";
import { Item } from "@heydovetail/website/components/layout/Item";
import { TestimonialProps } from "@heydovetail/website/components/site/Testimonial";
import { Testimonials } from "@heydovetail/website/components/site/Testimonials";
import { HALF_GAP, WIDTH } from "@heydovetail/website/constants";
import { CustomerLogos } from "@heydovetail/website/sections/CustomerLogos";
import * as React from "react";

interface Props {
  testimonials?: TestimonialProps[];
  title?: string;
}

export class SocialProof extends React.PureComponent<Props> {
  public render() {
    const { testimonials, title = "Loved by product managers, designers, and researchers worldwide." } = this.props;

    return (
      <Flex gap={HALF_GAP} layout="column">
        <Item>
          <Container maxWidth={WIDTH * 0.75} padding={{ x: 0, y: 0 }}>
            <Center>
              <h2>{title}</h2>
            </Center>
          </Container>
        </Item>
        {testimonials !== undefined ? (
          <Item>
            <Testimonials testimonials={testimonials} />
          </Item>
        ) : null}
        <Item>
          <CustomerLogos />
        </Item>
      </Flex>
    );
  }
}
