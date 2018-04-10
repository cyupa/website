import * as React from "react";
import { styled, styledViaProps } from "../../../util/styled";
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
      <Wrapper>
        {features.map((f, i) => (
          <Inner key={i} large={large}>
            {large ? <FeatureLarge text={f.text} title={f.title} /> : <Feature text={f.text} title={f.title} />}
          </Inner>
        ))}
      </Wrapper>
    );
  }
}

const Wrapper = styled("div", {
  display: "flex",
  flexWrap: "wrap",
  margin: "-16px"
});

const Inner = styledViaProps(
  "div",
  ({ large }: { large: boolean }) => JSON.stringify({ large }),
  ({ large }) => ({
    margin: "16px",
    maxWidth: large ? "400px" : "256px"
  })
);
