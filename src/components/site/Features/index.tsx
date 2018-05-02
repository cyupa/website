import { FlexWrap } from "@heydovetail/website/components/layout/FlexWrap";
import { Item } from "@heydovetail/website/components/layout/Item";
import * as React from "react";
import { Feature, FeatureProps } from "../Feature";
import { FeatureLarge } from "../FeatureLarge";

interface Props {
  features: FeatureProps[];
  large?: boolean;
}

export class Features extends React.PureComponent<Props> {
  public render() {
    const { features, large = false } = this.props;
    return (
      <FlexWrap styled={{ growItems: true, maxChildWidth: 256, justifyContent: "center", gap: large ? 64 : 32 }}>
        {features.map((f, i) => <Item key={i}>{large ? <FeatureLarge {...f} /> : <Feature {...f} />}</Item>)}
      </FlexWrap>
    );
  }
}
