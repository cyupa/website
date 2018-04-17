import { ButtonLink } from "@heydovetail/website/components/forms/ButtonLink";
import { Container } from "@heydovetail/website/components/layout/Container";
import { Flex } from "@heydovetail/website/components/layout/Flex";
import { Flow } from "@heydovetail/website/components/layout/Flow";
import { Item } from "@heydovetail/website/components/layout/Item";
import { LinkList } from "@heydovetail/website/components/site/LinkList";
import { COLORS } from "@heydovetail/website/constants";
import { locations } from "@heydovetail/website/routing/locations";
import { styled } from "@heydovetail/website/util/styled";
import * as React from "react";

export class MobileMenu extends React.PureComponent {
  public render() {
    return (
      <Container horizontalPadding={32} verticalPadding={32}>
        <Flex gap={40} layout="column">
          <Item>
            <ButtonLink color={COLORS.purple} height={32} location={locations.signUp()}>
              Try now
            </ButtonLink>
          </Item>
          <Item>
            <LinkList
              heading="Use cases"
              links={[
                { label: "Feedback management", location: locations.customerFeedback() },
                { label: "Research repository", location: locations.researchRepository() },
                { label: "Qualitative data analysis", location: locations.qualitativeDataAnalysis() },
                { label: "Collaborative user research", location: locations.userResearch() }
              ]}
            />
          </Item>
          <Item>
            <HorizontalRule />
          </Item>
          <Item>
            <Flow gap={48}>
              <Item style={{ verticalAlign: "top" }}>
                <LinkList
                  links={[
                    { label: "Pricing", location: locations.pricing() },
                    { label: "Support", location: locations.help() },
                    { label: "Log in", location: locations.logIn() }
                  ]}
                />
              </Item>
              <Item style={{ verticalAlign: "top" }}>
                <LinkList
                  links={[{ label: "About", location: locations.about() }, { label: "Blog", location: locations.blog() }]}
                />
              </Item>
            </Flow>
          </Item>
        </Flex>
      </Container>
    );
  }
}

const HorizontalRule = styled("hr", {
  backgroundColor: COLORS.i08,
  border: 0,
  margin: "0",
  height: "2px"
});
