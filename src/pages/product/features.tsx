import { Container } from "@heydovetail/website/components/layout/Container";
import { Flex } from "@heydovetail/website/components/layout/Flex";
import { Item } from "@heydovetail/website/components/layout/Item";
import { Features } from "@heydovetail/website/components/site/Features";
import { HeroText } from "@heydovetail/website/components/site/HeroText";
import { LightContainer } from "@heydovetail/website/components/site/LightContainer";
import { COLORS, HALF_GAP, PADDING, VERTICAL_GAP, WIDTH } from "@heydovetail/website/constants";
import { CenteredSignUp } from "@heydovetail/website/sections/CenteredSignUp";
import { UseCases } from "@heydovetail/website/sections/UseCases";
import * as React from "react";
import { Helmet } from "react-helmet";

export default class extends React.PureComponent {
  public render() {
    return (
      <>
        <Helmet>
          <title>Features – Dovetail</title>
          <meta property="og:title" content="Features – Dovetail" />
          <meta
            name="description"
            content="Features designed to help you organize and analyze customer feedback and user research data."
          />
          <meta
            property="og:description"
            content="Features designed to help you organize and analyze customer feedback and user research data."
          />
        </Helmet>
        <Container styled={{ maxWidth: WIDTH, padding: { x: PADDING, y: HALF_GAP } }}>
          <HeroText
            center={false}
            maxWidth={WIDTH / 2}
            text="Features designed to help you organize and analyze customer feedback and user research data."
            title="All features"
          />
        </Container>
        <LightContainer backgroundColor={COLORS.p04} maxWidth={WIDTH} padding={{ x: PADDING, y: HALF_GAP }}>
          <Features
            features={[
              {
                title: "Editor",
                text: "Take notes in our easy-to-use rich text editor"
              },
              {
                title: "Real time collaboration",
                text: "Collaborate on notes with others in real time"
              },
              {
                title: "Annotations",
                text: "Add tags to data using inline annotations"
              },
              {
                launched: false,
                title: "Files",
                text: "Organize and analyze images, audio, and video files"
              },
              {
                title: "Insights",
                text: "Create and store insights during analysis"
              },
              {
                title: "Boards",
                text: "View notes, tags, and insights on a drag & drop board"
              },
              {
                title: "Sentiment analysis",
                text: "Automatically analyze the sentiment of text"
              },
              {
                title: "Bar chart",
                text: "Understand your research projects at a glance"
              },
              {
                title: "Line chart",
                text: "Keep track of changes in your data over time"
              },
              {
                title: "Teams",
                text: "Collaborate with people across your organization"
              },
              {
                title: "Unlimited users",
                text: "Invite as many users as you like for no extra cost"
              },
              {
                title: "Single sign-on",
                text: "Let people join your team with domain-restricted sign up"
              },
              {
                title: "Projects",
                text: "Organize data into projects and create unique tag sets"
              },
              {
                title: "Import",
                text: "Create notes, tags, and insights via a spreadsheet"
              },
              {
                title: "Export",
                text: "Export notes & insights as PDFs and tags as a spreadsheet"
              },
              {
                title: "Zapier",
                text: "Import data from thousands of apps like Intercom and Wufoo"
              },
              {
                title: "Mobile",
                text: "Browse notes, tags, and insights on your phone or tablet"
              },
              {
                title: "Google log in",
                text: "Log in or sign up with your existing Google account"
              }
            ]}
          />
        </LightContainer>
        <Container styled={{ maxWidth: WIDTH, padding: { x: PADDING, y: VERTICAL_GAP } }}>
          <Flex styled={{ gap: VERTICAL_GAP, layout: "column" }}>
            <Item>
              <UseCases showTitle />
            </Item>
            <Item>
              <CenteredSignUp />
            </Item>
          </Flex>
        </Container>
      </>
    );
  }
}
