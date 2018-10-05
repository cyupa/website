import { ButtonLink, COLORS, Dropdown, Flex, Flow, Item } from "@heydovetail/ui-components";
import { GoToApp } from "@heydovetail/website/components/site/Header/goToApp";
import { LinkList } from "@heydovetail/website/components/site/LinkList";
import { locations } from "@heydovetail/website/routing/locations";
import React from "react";
import { styled } from "typestyle-react";

interface Props {
  loggedIn: boolean;
  onClose: () => void;
}

export class MobileMenu extends React.PureComponent<Props> {
  public render() {
    const { loggedIn, onClose } = this.props;

    return (
      <Dropdown>
        <Wrapper>
          <Flex styled={{ gap: 32, layout: "column" }}>
            <Item>
              {loggedIn ? (
                <GoToApp />
              ) : (
                <Flow>
                  <Item>
                    <ButtonLink color={COLORS.purple} height={32} location={locations.signUp()}>
                      Try now
                    </ButtonLink>
                  </Item>
                  <Item>
                    <ButtonLink height={32} location={locations.logIn()}>
                      Log in
                    </ButtonLink>
                  </Item>
                </Flow>
              )}
            </Item>
            <Item>
              <LinkList
                heading="Product"
                links={[
                  { label: "Qualitative data analysis", location: locations.qualitativeDataAnalysis(), onClick: onClose },
                  { label: "Collaborative user research", location: locations.userResearch(), onClick: onClose },
                  { label: "Research repository", location: locations.researchRepository(), onClick: onClose }
                ]}
              />
            </Item>
            <Item>
              <HorizontalRule />
            </Item>
            <Item>
              <Flow styled={{ gap: 48 }}>
                <Item style={{ verticalAlign: "top" }}>
                  <LinkList
                    links={[
                      { label: "Features", location: locations.features(), onClick: onClose },
                      { label: "Customers", location: locations.customers(), onClick: onClose },
                      { label: "Pricing", location: locations.pricing(), onClick: onClose }
                    ]}
                  />
                </Item>
                <Item style={{ verticalAlign: "top" }}>
                  <LinkList
                    links={[
                      { label: "Support", location: locations.help(), onClick: onClose },
                      { label: "Security", location: locations.security(), onClick: onClose },
                      { label: "About", location: locations.about(), onClick: onClose }
                    ]}
                  />
                </Item>
              </Flow>
            </Item>
          </Flex>
        </Wrapper>
      </Dropdown>
    );
  }
}

const Wrapper = styled("div", {
  padding: "24px"
});

const HorizontalRule = styled("hr", {
  backgroundColor: COLORS.p08,
  border: 0,
  margin: "0",
  height: "2px"
});
