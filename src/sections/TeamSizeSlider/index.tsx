import { BORDER_RADIUS, COLORS, Flex, Item, SmallText } from "@heydovetail/ui-components";
import { Center } from "@heydovetail/website/components/layout/Center";
import { Slider } from "@heydovetail/website/components/site/Slider";
import { HALF_GAP, MONTHLY_PRICE_IN_CENTS } from "@heydovetail/website/constants";
import * as React from "react";
import { styled } from "typestyle-react";

const COMPARISONS = [
  {
    value: 0.8,
    text: "a pack of gum 🍬"
  },
  {
    value: 1.0,
    text: "a New York city hot dog 🌭"
  },
  {
    value: 1.5,
    text: "a cheeseburger 🍔"
  },
  {
    value: 2.0,
    text: "a ride on the bus 🚌"
  },
  {
    value: 3.0,
    text: "a regular coffee ️️☕️"
  },
  {
    value: 5.0,
    text: "smashed avocado on toast 🥑"
  },
  {
    value: 8.0,
    text: "a burrito 🌯"
  },
  {
    value: 15.0,
    text: "a tee shirt 👕"
  },
  {
    value: 20.0,
    text: "a bottle of wine 🍷"
  },
  {
    value: 40.0,
    text: "a dinner out 🍽"
  }
];

interface State {
  count: number;
  disabled: boolean;
}

export class TeamSizeSlider extends React.PureComponent<{}, State> {
  public state: State = {
    count: 15,
    disabled: true
  };

  // The slider needs JavaScript to work, so we disable it
  // in the static build and enable it when JS runs.
  public componentDidMount() {
    this.setState({ disabled: false });
  }

  public render() {
    const { count } = this.state;
    const cost = (MONTHLY_PRICE_IN_CENTS / count / 100).toFixed(2);
    const comparison = COMPARISONS.find(e => e.value > parseInt(cost));

    return (
      <Center>
        <Flex styled={{ gap: HALF_GAP, layout: "column" }}>
          <Item>
            <Slider
              defaultValue={15}
              disabled={this.state.disabled}
              max={100}
              maxLabel="100+ people"
              min={2}
              minLabel="2 people"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                this.setState({ count: parseInt(e.target.value) });
              }}
            />
          </Item>
          <Item>
            <Flex styled={{ gap: 24, layout: "column" }}>
              <Item>
                <h2>Fixed price per team</h2>
              </Item>
              <Item>
                <Flex styled={{ gap: 24, layout: "column" }}>
                  <Item>
                    <p>
                      For a team of <Count>{count}</Count> people, Dovetail costs <Cost>${cost}</Cost> per person, per month.
                    </p>
                  </Item>
                  {comparison !== undefined ? (
                    <Item>
                      <SmallText>Less than {comparison.text}</SmallText>
                    </Item>
                  ) : null}
                </Flex>
              </Item>
            </Flex>
          </Item>
        </Flex>
      </Center>
    );
  }
}

const Count = styled("span", {
  backgroundColor: COLORS.purple,
  borderRadius: BORDER_RADIUS,
  display: "inline-block",
  color: COLORS.white,
  fontSize: "14px",
  fontWeight: 500,
  lineHeight: "14px",
  padding: "6px 8px 4px"
});

const Cost = styled("span", {
  display: "inline-block",
  fontWeight: 500
});
