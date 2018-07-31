import { BORDER_RADIUS, BREAKPOINT_PHABLET } from "@heydovetail/ui-components";
import React from "react";
import { extend, media } from "typestyle";
import { styled } from "typestyle-react";

interface Props {
  direction?: "row" | "row-reverse";
  image1: string;
  image2: string;
  image3: string;
}

export function PhotoGrid(props: Props) {
  const { direction = "row", image1, image2, image3 } = props;

  return (
    <Wrapper styled={{ direction }}>
      <Primary>
        <ImageWrapper>
          <Image style={{ backgroundImage: `url(${image1})` }} />
        </ImageWrapper>
      </Primary>
      <Secondary>
        <ImageWrapper>
          <Image style={{ backgroundImage: `url(${image2})` }} />
        </ImageWrapper>
        <ImageWrapper>
          <Image style={{ backgroundImage: `url(${image3})` }} />
        </ImageWrapper>
      </Secondary>
    </Wrapper>
  );
}

const Wrapper = styled("div", ({ direction }: { direction?: Props["direction"] }) =>
  extend(
    {
      display: "flex",
      flexDirection: direction,
      margin: "0 -8px"
    },
    media(
      { maxWidth: BREAKPOINT_PHABLET },
      {
        flexDirection: "column"
      }
    )
  )
);

const Primary = styled("div", {
  display: "flex",
  flex: "1 1 66%"
});

const Secondary = styled("div", {
  display: "flex",
  flexDirection: "column",
  flex: "1 1 33%"
});

const ImageWrapper = styled("div", {
  display: "flex",
  flex: "1 1 100%",
  minHeight: 160,
  padding: 8
});

const Image = styled("div", {
  backgroundPosition: "50% 50%",
  backgroundSize: "cover",
  borderRadius: BORDER_RADIUS,
  flex: "1 1 100%"
});
