import * as React from "react";
import { COLORS, TYPICAL_PAGE_WIDTH } from "../../../constants";
import { styled } from "../../../util/styled";
import { Container } from "../../layout/Container";
import { Flex } from "../../layout/Flex";
import { Flow } from "../../layout/Flow";
import { Item } from "../../layout/Item";
import { FooterList } from "./FooterList";

export class Footer extends React.PureComponent {
  public render() {
    return (
      <Wrapper>
        <Container maxWidth={TYPICAL_PAGE_WIDTH} verticalPadding={64}>
          <Flex>
            <Item>
              <Flow gap={48} rowGap={48}>
                <Item>
                  <FooterList
                    heading="Use cases"
                    items={[
                      { label: "Feedback management", location: "/product/customer-feedback" },
                      { label: "Research repository", location: "/product/research-repository" },
                      { label: "Qualitative data analysis", location: "/product/qda" },
                      { label: "Collaborative user research", location: "/product/user-research" }
                    ]}
                  />
                </Item>
                <Item>
                  <FooterList
                    heading="Useful links"
                    items={[
                      { label: "Home", location: "/" },
                      { label: "Features", location: "/product/features" },
                      { label: "Pricing", location: "/product/pricing" },
                      { label: "Support", location: "/help" }
                    ]}
                  />
                </Item>
                <Item>
                  <FooterList
                    heading="Company"
                    items={[
                      { label: "About", location: "/company/about" },
                      { label: "Press", location: "/company/press" },
                      { label: "Blog", location: "https://dovetail.blog" },
                      { label: "Slack", location: "https://slack.dovetailapp.com" }
                    ]}
                  />
                </Item>
              </Flow>
            </Item>
            <Item />
          </Flex>
        </Container>
      </Wrapper>
    );
  }
}

const Wrapper = styled("div", {
  backgroundColor: COLORS.p04,
  width: "100%"
});
