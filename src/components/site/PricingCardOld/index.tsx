import { BORDER_RADIUS, BREAKPOINT_PHABLET, COLORS, Flex, IconCheckCircle, Item, SmallText } from "@heydovetail/ui-components";
import React from "react";
import { media } from "typestyle";
import { styled } from "typestyle-react";

export interface Props {
  features: string[];
  price: number;
}

export class PricingCardOld extends React.PureComponent<Props> {
  public render() {
    const { features, price } = this.props;

    return (
      <Wrapper>
        <PriceContainer>
          <Price>
            <DollarSign>$</DollarSign>
            <Amount>{price / 100}</Amount>
            <Frequency>/ month</Frequency>
          </Price>
          <FinePrint>
            <Flex styled={{ gap: 8, layout: "column" }}>
              <Item>
                <SmallText size={14}>Price per team</SmallText>
              </Item>
              <Item>
                <SmallText size={14}>Billed monthly or yearly</SmallText>
              </Item>
            </Flex>
          </FinePrint>
        </PriceContainer>
        <FeaturesContainer>
          <Flex styled={{ gap: 24, layout: "column" }}>
            {features.map((feature, i) => (
              <Item key={i}>
                <Flex styled={{ alignItems: "center", gap: 24 }}>
                  <Item style={{ flexGrow: 0 }}>
                    <IconCheckCircle color={COLORS.green} />
                  </Item>
                  <Item style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{feature}</Item>
                </Flex>
              </Item>
            ))}
          </Flex>
        </FeaturesContainer>
      </Wrapper>
    );
  }
}

const Wrapper = styled(
  "div",
  {
    borderRadius: BORDER_RADIUS,
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    overflow: "hidden",
    width: "100%"
  },
  media(
    { maxWidth: BREAKPOINT_PHABLET },
    {
      gridTemplateColumns: "1fr"
    }
  )
);

const PriceContainer = styled("div", {
  backgroundColor: COLORS.p08,
  fontWeight: 500,
  padding: "32px"
});

const Price = styled("div", {
  textAlign: "center",
  position: "relative"
});

const DollarSign = styled("span", {
  fontSize: "24px",
  position: "absolute",
  transform: "translate(-24px, 16px)"
});

const Amount = styled("span", {
  fontSize: "96px"
});

const Frequency = styled("span", {
  fontSize: "24px",
  whiteSpace: "nowrap"
});

const FinePrint = styled("div", {
  marginTop: "24px",
  textAlign: "center"
});

const FeaturesContainer = styled("div", {
  backgroundColor: COLORS.p04,
  overflow: "hidden",
  padding: "32px"
});
