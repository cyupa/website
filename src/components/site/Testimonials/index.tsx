import { Testimonial, TestimonialProps } from "@heydovetail/website/components/site/Testimonial";
import { WIDTH } from "@heydovetail/website/constants";
import React from "react";
import { Masonry } from "react-masonry-responsive";

interface Props {
  testimonials: TestimonialProps[];
}

export class Testimonials extends React.PureComponent<Props> {
  public render() {
    const { testimonials } = this.props;

    return (
      <Masonry containerWidth={WIDTH} gap={32} items={testimonials.map(t => <Testimonial {...t} />)} minColumnWidth={260} />
    );
  }
}
