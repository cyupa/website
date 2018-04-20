import LogoArm from "@heydovetail/website/components/icons/customers/LogoArm";
import LogoAtlassian from "@heydovetail/website/components/icons/customers/LogoAtlassian";
import LogoCsiro from "@heydovetail/website/components/icons/customers/LogoCsiro";
import LogoDeloitte from "@heydovetail/website/components/icons/customers/LogoDeloitte";
import LogoElsevier from "@heydovetail/website/components/icons/customers/LogoElsevier";
import LogoEnigma from "@heydovetail/website/components/icons/customers/LogoEnigma";
import LogoFreshworks from "@heydovetail/website/components/icons/customers/LogoFreshworks";
import LogoFtw from "@heydovetail/website/components/icons/customers/LogoFtw";
import LogoIbm from "@heydovetail/website/components/icons/customers/LogoIbm";
import LogoIdeo from "@heydovetail/website/components/icons/customers/LogoIdeo";
import LogoMonotype from "@heydovetail/website/components/icons/customers/LogoMonotype";
import LogoNike from "@heydovetail/website/components/icons/customers/LogoNike";
import LogoNubank from "@heydovetail/website/components/icons/customers/LogoNubank";
import LogoRbs from "@heydovetail/website/components/icons/customers/LogoRbs";
import LogoUniqa from "@heydovetail/website/components/icons/customers/LogoUniqa";
import LogoWestpac from "@heydovetail/website/components/icons/customers/LogoWestpac";
import { Center } from "@heydovetail/website/components/layout/Center";
import { Container } from "@heydovetail/website/components/layout/Container";
import { Flex } from "@heydovetail/website/components/layout/Flex";
import { FlexWrap } from "@heydovetail/website/components/layout/FlexWrap";
import { Item } from "@heydovetail/website/components/layout/Item";
import { HeroText } from "@heydovetail/website/components/site/HeroText";
import { LightContainer } from "@heydovetail/website/components/site/LightContainer";
import { Testimonials } from "@heydovetail/website/components/site/Testimonials";
import { COLORS, HALF_GAP, PADDING, TESTIMONIALS, VERTICAL_GAP, WIDTH } from "@heydovetail/website/constants";
import { CenteredSignUp } from "@heydovetail/website/sections/CenteredSignUp";
import * as React from "react";
import { Helmet } from "react-helmet";

export default class extends React.PureComponent {
  public render() {
    return (
      <>
        <Helmet>
          <title>Our customers – Dovetail</title>
          <meta property="og:title" content="Our customers – Dovetail" />
          <meta name="description" content="Loved by product managers, designers, and researchers worldwide." />
          <meta property="og:description" content="Loved by product managers, designers, and researchers worldwide." />
        </Helmet>
        <Container maxWidth={WIDTH} padding={{ x: PADDING, y: HALF_GAP }}>
          <HeroText
            center={false}
            maxWidth={WIDTH / 2}
            text="Designers, researchers, and product managers from all over the globe use Dovetail to organize and analyze customer feedback and user research."
            title="Our customers"
          />
        </Container>
        <LightContainer backgroundColor={COLORS.teal} maxWidth={WIDTH} padding={{ x: PADDING, y: VERTICAL_GAP }}>
          <div style={{ color: COLORS.white }}>
            <FlexWrap gap={64} justifyContent="center">
              <Item>
                <LogoArm />
              </Item>
              <Item>
                <LogoAtlassian />
              </Item>
              <Item>
                <LogoCsiro />
              </Item>
              <Item>
                <LogoDeloitte />
              </Item>
              <Item>
                <LogoElsevier />
              </Item>
              <Item>
                <LogoEnigma />
              </Item>
              <Item>
                <LogoFreshworks />
              </Item>
              <Item>
                <LogoFtw />
              </Item>
              <Item>
                <LogoIdeo />
              </Item>
              <Item>
                <LogoIbm />
              </Item>
              <Item>
                <LogoMonotype />
              </Item>
              <Item>
                <LogoNike />
              </Item>
              <Item>
                <LogoNubank />
              </Item>
              <Item>
                <LogoRbs />
              </Item>
              <Item>
                <LogoUniqa />
              </Item>
              <Item>
                <LogoWestpac />
              </Item>
            </FlexWrap>
          </div>
        </LightContainer>
        <Container maxWidth={WIDTH} padding={{ x: PADDING, y: VERTICAL_GAP }}>
          <Flex gap={HALF_GAP} layout="column">
            <Item>
              <Container maxWidth={WIDTH * 0.75} padding={{ x: 0, y: 0 }}>
                <Center>
                  <h2>Here’s why they love Dovetail.</h2>
                </Center>
              </Container>
            </Item>
            <Item>
              <Testimonials
                testimonials={[
                  TESTIMONIALS.abhilash,
                  TESTIMONIALS.aurelia,
                  TESTIMONIALS.basheera,
                  TESTIMONIALS.benjamin,
                  TESTIMONIALS.erik,
                  TESTIMONIALS.michael,
                  TESTIMONIALS.pascal,
                  TESTIMONIALS.sarah,
                  TESTIMONIALS.sonja,
                  TESTIMONIALS.tina
                ]}
              />
            </Item>
          </Flex>
        </Container>
        <Container maxWidth={WIDTH} padding={{ x: PADDING, y: HALF_GAP }}>
          <CenteredSignUp />
        </Container>
      </>
    );
  }
}
