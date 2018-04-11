import * as React from "react";
import { BORDER_RADIUS, COLORS } from "../../../constants";
import { styled } from "../../../util/styled";
import { Button } from "../../forms/Button";
import IconCheckCircle from "../../icons/feather/IconCheckCircle";
import { Flex } from "../../layout/Flex";
import { Item } from "../../layout/Item";
import { SmallText } from "../../util/SmallText";

interface Props {
  features: string[];
  // Amount in cents.
  price: number;
}

export class PricingCard extends React.PureComponent<Props> {
  public render() {
    const { features, price } = this.props;

    return (
      <Wrapper>
        <Price>
          <Flex gap={32} layout="column">
            <Item>
              <DollarSign>$</DollarSign>
              <Amount>{price / 100}</Amount>
              <Frequency>/ month</Frequency>
            </Item>
            <Item>
              <FinePrint>
                <Flex gap={8} layout="column">
                  <Item>
                    <SmallText size={14}>Unlimited users</SmallText>
                  </Item>
                  <Item>
                    <SmallText size={14}>Billed annually or monthly</SmallText>
                  </Item>
                </Flex>
              </FinePrint>
            </Item>
          </Flex>
        </Price>
        <Features>
          <Flex gap={24} layout="column">
            {features.map(feature => (
              <Item>
                <Flex alignItems="center" gap={24}>
                  <Item style={{ flexGrow: 0 }}>
                    <IconCheckCircle color={COLORS.green} />
                  </Item>
                  <Item style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{feature}</Item>
                </Flex>
              </Item>
            ))}
          </Flex>
          <SignUpButton>
            <Button color={COLORS.purple} onClick={() => {}}>
              Try free for 14 days
            </Button>
          </SignUpButton>
        </Features>
      </Wrapper>
    );
  }
}

const Wrapper = styled("div", {
  borderRadius: BORDER_RADIUS,
  display: "flex",
  flexWrap: "wrap",
  overflow: "hidden",
  width: "100%"
});

const Price = styled("div", {
  alignItems: "center",
  backgroundColor: COLORS.p08,
  display: "flex",
  flex: "1 1 50%",
  fontWeight: 500,
  justifyContent: "center",
  padding: "40px"
});

const Features = styled("div", {
  backgroundColor: COLORS.p04,
  color: COLORS.i60,
  fontWeight: 500,
  flex: "1 1 50%",
  overflow: "hidden",
  padding: "40px"
});

const DollarSign = styled("span", {
  display: "inline-block",
  fontSize: "24px",
  transform: "translateY(-64px)"
});

const Amount = styled("span", {
  fontSize: "96px"
});

const Frequency = styled("span", {
  fontSize: "24px"
});

const FinePrint = styled("span", {
  textAlign: "center"
});

const SignUpButton = styled("div", {
  marginTop: "48px"
});
