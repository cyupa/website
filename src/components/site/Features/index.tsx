import * as React from "react";
import { styled } from "../../../util/styled";
import { Feature, FeatureProps } from "../Feature";

interface Props {
  features: FeatureProps[];
}

export class Features extends React.PureComponent<Props> {
  public render() {
    const { features } = this.props;
    return (
      <Wrapper>
        {features.map((f, i) => (
          <Inner>
            <Feature key={i} text={f.text} title={f.title} />
          </Inner>
        ))}
      </Wrapper>
    );
  }
}

const Wrapper = styled("div", {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  margin: "0 -16px"
});

const Inner = styled("div", {
  margin: "16px",
  maxWidth: "256px"
});
