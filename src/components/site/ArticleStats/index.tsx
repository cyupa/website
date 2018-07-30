import { BREAKPOINT_PHONE, COLORS, LocationDescriptor, LocationLink } from "@heydovetail/ui-components";
import React from "react";
import { media } from "typestyle";
import { styled } from "typestyle-react";

interface Stat {
  title: string;
  text: string;
  location?: LocationDescriptor;
}

interface Props {
  stats: Stat[];
}

export default function ArticleStats(props: Props) {
  const { stats } = props;

  return (
    <Wrapper>
      {stats.map(s => (
        <StatItem>
          <Title>{s.title}</Title>
          <p>{s.location !== undefined ? <LocationLink location={s.location}>{s.text}</LocationLink> : s.text}</p>
        </StatItem>
      ))}
    </Wrapper>
  );
}

const Wrapper = styled("div", {
  display: "flex",
  flexWrap: "wrap",
  margin: -8
});

const StatItem = styled(
  "div",
  {
    flexShrink: 0,
    padding: 8,
    minWidth: "33%"
  },
  media(
    { maxWidth: BREAKPOINT_PHONE },
    {
      minWidth: "50%"
    }
  )
);

const Title = styled("h3", {
  color: COLORS.i60,
  fontSize: 12,
  fontWeight: 500,
  textTransform: "uppercase"
});
