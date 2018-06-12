import { BORDER_RADIUS, COLORS, Flex, Item } from "@heydovetail/ui-components";
import { Center } from "@heydovetail/website/components/layout/Center";
import { Slider } from "@heydovetail/website/components/site/Slider";
import { HALF_GAP, MONTHLY_PRICE_IN_CENTS } from "@heydovetail/website/constants";
import * as React from "react";
import { styled } from "typestyle-react";

const COMPARISONS = [
  {
    value: 0.8,
    text: "a phone call to the outback"
  },
  {
    value: 1.0,
    text: "a cheeseburger at Macca’s"
  },
  {
    value: 2.0,
    text: "a toll over the Sydney Harbour Bridge"
  },
  {
    value: 3.0,
    text: "a flat white in Surry Hills"
  },
  {
    value: 5.0,
    text: "smashed avocado on toast"
  },
  {
    value: 8.0,
    text: "a ferry trip to Manly"
  },
  {
    value: 13.0,
    text: "grabbing lunch at Circular Quay"
  },
  {
    value: 21.0,
    text: "hiring a surfboard in Bondi"
  },
  {
    value: 34.0,
    text: "a slab of Australian craft beer"
  },
  {
    value: 55.0,
    text: "a boomarang that won’t come back"
  }
];

interface State {
  count: number;
}

export class TeamSizeSlider extends React.PureComponent<{}, State> {
  public state: State = {
    count: 25
  };

  public render() {
    const { count } = this.state;
    const cost = (MONTHLY_PRICE_IN_CENTS / count / 100).toFixed(2);
    const comparison = COMPARISONS.find(e => e.value > parseInt(cost));

    return (
      <Center>
        <Flex styled={{ gap: HALF_GAP, layout: "column" }}>
          <Item>
            <Slider
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
                <h2>Stays affordable as you grow</h2>
              </Item>
              <Item>
                <p>
                  For a team of <Count>{count}</Count> people, Dovetail is just <Cost>${cost}</Cost> per person, per month.
                </p>
                {comparison !== undefined ? <p>Cheaper than {comparison.text}!</p> : null}
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
