import { Masonry } from "@heydovetail/website/components/layout/Masonry";
import { Testimonial, TestimonialProps } from "@heydovetail/website/components/site/Testimonial";
import * as React from "react";

interface Props {
  testimonials: TestimonialProps[];
}

export class Testimonials extends React.PureComponent<Props> {
  public render() {
    const { testimonials } = this.props;

    return (
      <Masonry
        gap={32}
        items={testimonials.map((t, i) => ({ id: `${i}`, node: <Testimonial {...t} /> }))}
        minColumnWidth={260}
      />
    );
  }
}
