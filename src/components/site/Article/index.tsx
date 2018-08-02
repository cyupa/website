import { BORDER_RADIUS, COLORS, Flex, Item, LocationDescriptor, LocationLink } from "@heydovetail/ui-components";
import React from "react";
import { style, styled } from "typestyle-react";

interface Props {
  image: string;
  insetImage: string;
  title: React.ReactNode;
  location: LocationDescriptor;
}

export function Article(props: Props) {
  const { image, insetImage, title, location } = props;

  return (
    <LocationLink className={linkClassName} location={location}>
      <Flex styled={{ gap: 16, layout: "column" }}>
        <Item>
          <ImageWrapper>
            <MainImage styled={{ image }} />
            <InsetImage styled={{ image: insetImage }} />
          </ImageWrapper>
        </Item>
        <Item>
          <Title>{title}</Title>
        </Item>
        <Item>
          <Link>Read story →</Link>
        </Item>
      </Flex>
    </LocationLink>
  );
}

const linkClassName = style({
  borderRadius: BORDER_RADIUS,
  display: "block",
  padding: 16,
  margin: -16,

  $nest: {
    "&:hover": {
      backgroundColor: COLORS.p04
    }
  }
});

const ImageWrapper = styled("div", {
  position: "relative"
});

const MainImage = styled("div", ({ image }: { image: string }) => ({
  backgroundImage: `url(${image})`,
  backgroundPosition: "50% 50%",
  backgroundSize: "cover",
  borderRadius: BORDER_RADIUS,
  minHeight: 176,
  width: "100%"
}));

const InsetImage = styled("div", ({ image }: { image: string }) => ({
  backgroundImage: `url(${image})`,
  backgroundPosition: "50% 50%",
  backgroundSize: "cover",
  borderRadius: BORDER_RADIUS,
  bottom: 8,
  height: 48,
  position: "absolute",
  right: 8,
  width: 80
}));

const Title = styled("h2", {
  color: COLORS.indigo,
  fontSize: 24,
  lineHeight: "32px"
});

const Link = styled("p", {
  color: COLORS.purple,
  fontWeight: 500
});
