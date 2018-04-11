import * as React from "react";
import { GridWrap } from "../../layout/GridWrap";
import { Item } from "../../layout/Item";
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
      <GridWrap childMaxWidth={256} justifyContent="center" gap={large ? 64 : 32}>
        {features.map((f, i) => (
          <Item key={i}>
            {large ? <FeatureLarge text={f.text} title={f.title} /> : <Feature text={f.text} title={f.title} />}
          </Item>
        ))}
      </GridWrap>
    );
  }
}
