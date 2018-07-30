import { COLORS, LocationDescriptor, LocationLink } from "@heydovetail/ui-components";
import { HALF_GAP, QUARTER_GAP } from "@heydovetail/website/constants";
import React from "react";
import { styled } from "typestyle-react";

interface Props {
  backLocation: LocationDescriptor;
  title: string;
  text: string;
}

export default function ArticleHero(props: Props) {
  const { backLocation, title, text } = props;

  return (
    <Wrapper>
      <LocationLink location={backLocation}>Customers</LocationLink>
      <Heading>{title}</Heading>
      <Subheading>{text}</Subheading>
    </Wrapper>
  );
}

const Wrapper = styled("div", {
  paddingBottom: QUARTER_GAP,
  paddingTop: HALF_GAP
});

const Heading = styled("h1", {
  margin: "12px 0"
});

const Subheading = styled("h2", {
  color: COLORS.i60,
  fontSize: 24,
  lineHeight: "32px"
});
