import * as React from "react";
import { COLORS, TYPICAL_PAGE_WIDTH } from "../../../constants";
import { styled } from "../../../util/styled";
import { Container } from "../../layout/Container";
import { Flex } from "../../layout/Flex";
import { GridWrap } from "../../layout/GridWrap";
import { Item } from "../../layout/Item";
import { SmallText } from "../../util/SmallText";
import Wave from "../Wave/Wave";
import { FooterList } from "./FooterList";

export class Footer extends React.PureComponent {
  public render() {
    return (
      <>
        <Wave color={COLORS.p04} />
        <Wrapper>
          <Container maxWidth={TYPICAL_PAGE_WIDTH} verticalPadding={64}>
            <Flex gap={64} layout="column">
              <Item>
                <GridWrap gap={96}>
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
                      heading="Resources"
                      items={[
                        { label: "Guides", location: "/guides" },
                        { label: "Privacy", location: "/legal/privacy" },
                        { label: "Security", location: "/product/security" },
                        { label: "Terms", location: "/legal" }
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
                </GridWrap>
              </Item>
              <Item>
                <Flex gap={8} layout="column">
                  <Item>
                    <SmallText>© Dovetail Research Pty Ltd</SmallText>
                  </Item>
                  <Item>
                    <SmallText>Made in 🐨Australia and 🥝New Zealand</SmallText>
                  </Item>
                </Flex>
              </Item>
            </Flex>
          </Container>
        </Wrapper>
      </>
    );
  }
}

const Wrapper = styled("div", {
  backgroundColor: COLORS.p04,
  width: "100%"
});
