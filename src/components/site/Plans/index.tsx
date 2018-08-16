import { Flex, Item, OverflowShadow, PricingCard } from "@heydovetail/ui-components";
import { IntervalToggle } from "@heydovetail/website/components/site/Plans/IntervalToggle";
import { locations } from "@heydovetail/website/routing/locations";
import React from "react";

type ProductId = "solo" | "team" | "business" | "enterprise";

interface Plan {
  amountMonthly: number;
  amountYearly: number;
  coreFeatures: string[];
  current: boolean;
  extraFeatures: string[];
  highlighted: boolean;
  productId: ProductId;
  projectLimit: number;
}

export const PLAN_DETAILS: Plan[] = [
  {
    amountMonthly: 3900,
    amountYearly: 1900,
    coreFeatures: ["Only 1 project", "Only text and images", "Unlimited users"],
    current: false,
    extraFeatures: ["Knowledge base", "Slack community"],
    highlighted: false,
    productId: "solo",
    projectLimit: 1
  },
  {
    amountMonthly: 7900,
    amountYearly: 4900,
    coreFeatures: ["Up to 3 projects", "Text, images, files", "Unlimited users"],
    current: false,
    extraFeatures: ["Email support", "Knowledge base", "Slack community"],
    highlighted: false,
    productId: "team",
    projectLimit: 3
  },
  {
    amountMonthly: 9900,
    amountYearly: 7900,
    coreFeatures: ["Up to 10 projects", "Text, images, files", "Unlimited users"],
    current: false,
    extraFeatures: ["Priority email support", "Knowledge base", "Slack community"],
    highlighted: true,
    productId: "business",
    projectLimit: 10
  },
  {
    amountMonthly: 24900,
    amountYearly: 19900,
    coreFeatures: ["Up to 100 projects", "Text, images, files", "Unlimited users"],
    current: false,
    extraFeatures: ["Account manager", "Pay by invoice", "Priority email support", "Knowledge base", "Slack community"],
    highlighted: false,
    productId: "enterprise",
    projectLimit: 100
  }
];

interface State {
  yearly: boolean;
}

export class Plans extends React.PureComponent<{}, State> {
  public state: State = {
    yearly: true
  };

  public render() {
    const { yearly } = this.state;

    return (
      <Flex styled={{ gap: 48, layout: "column" }}>
        <Item>
          <IntervalToggle onToggle={() => this.setState({ yearly: !yearly })} yearly={yearly} />
        </Item>
        <Item>
          <OverflowShadow>
            <Flex styled={{ gap: 16 }}>
              {PLAN_DETAILS.map((p, i) => (
                <Item key={i} style={{ flex: "0 0 220px" }}>
                  <PricingCard
                    amount={yearly ? p.amountYearly : p.amountMonthly}
                    buttonText="Start free trial"
                    coreFeatures={p.coreFeatures}
                    current={p.current}
                    extraFeatures={p.extraFeatures}
                    highlighted={p.highlighted}
                    location={locations.signUp()}
                    productId={p.productId}
                    yearly={yearly}
                  />
                </Item>
              ))}
            </Flex>
          </OverflowShadow>
        </Item>
      </Flex>
    );
  }
}
