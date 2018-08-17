import { LightContainer } from "@heydovetail/website/components/layout/LightContainer";
import { Hero } from "@heydovetail/website/components/site/Hero";
import { ARTICLE_WIDTH, HALF_GAP, PADDING, QUARTER_GAP } from "@heydovetail/website/constants";
import React from "react";

interface Props {
  title: string;
  text: string;
}

// This is a workaround until <LightContainer /> can support different top / bottom padding.

export function ArticleHero(props: Props) {
  return (
    <LightContainer maxWidth={ARTICLE_WIDTH} padding={{ x: 0, y: 0 }}>
      <div style={{ paddingBottom: QUARTER_GAP, paddingLeft: PADDING, paddingRight: PADDING, paddingTop: HALF_GAP }}>
        <Hero title={props.title} subtitle={props.text} />
      </div>
    </LightContainer>
  );
}
