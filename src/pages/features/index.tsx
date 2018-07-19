import { COLORS } from "@heydovetail/ui-components";
import { Features } from "@heydovetail/website/components/site/Features";
import { HeroText } from "@heydovetail/website/components/site/HeroText";
import { LightContainer } from "@heydovetail/website/components/site/LightContainer";
import { WIDTH } from "@heydovetail/website/constants";
import { CenteredSignUp } from "@heydovetail/website/sections/CenteredSignUp";
import { UseCases } from "@heydovetail/website/sections/UseCases";
import React from "react";
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
        <LightContainer>
          <HeroText
            center={false}
            maxWidth={WIDTH / 2}
            text="Features designed to help you organize and analyze customer feedback and user research data."
            title="All features"
          />
        </LightContainer>
        <LightContainer backgroundColor={COLORS.p04}>
          <Features
            features={[
              {
                title: "Editor",
                text: "Take notes in our easy-to-use rich text editor"
              },
              {
                title: "Highlights",
                text: "Add tags to data using inline highlights"
              },
              {
                title: "Real time editing",
                text: "Collaborate on notes with others in real time"
              },
              {
                title: "Boards",
                text: "View notes, tags, and insights on a drag & drop board"
              },
              {
                title: "Images",
                text: "Add images to research notes, tags, and insights"
              },
              {
                title: "Files",
                text: "Store and organize documents, audio, and video files"
              },
              {
                title: "Insights",
                text: "Summarize and share research insights during analysis"
              },
              {
                title: "Sentiment analysis",
                text: "Automatically analyze the sentiment of text"
              },
              {
                title: "Zapier",
                text: "Import data from thousands of apps like Trello and Wufoo"
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
                title: "Mobile",
                text: "Browse notes, tags, and insights on your phone or tablet"
              },
              {
                title: "Google log in",
                text: "Log in or sign up with your existing Google account"
              },
              {
                title: "Encrypted data",
                text: "Your data is encrypted in our database and backups"
              },
              {
                title: "GDPR-ready",
                text: "Dovetail is GDPR-ready with a DPA available on request"
              },
              {
                title: "Premium support",
                text: "Quick responses to questions and issues via email"
              },
              {
                title: "Knowledge base",
                text: "Detailed help documentation with walkthroughs"
              },
              {
                title: "Slack community",
                text: "Chat with our team and other researchers on Slack"
              }
            ]}
          />
        </LightContainer>
        <LightContainer>
          <UseCases showTitle />
          <CenteredSignUp />
        </LightContainer>
      </>
    );
  }
}
