import { ArticleHero } from "@heydovetail/website/components/site/ArticleHero";
import { ArticleStats } from "@heydovetail/website/components/site/ArticleStats";
import { LightContainer } from "@heydovetail/website/components/site/LightContainer";
import { StyledContent } from "@heydovetail/website/components/site/PageContent";
import { PhotoGrid } from "@heydovetail/website/components/site/PhotoGrid";
import { PADDING, QUARTER_GAP } from "@heydovetail/website/constants";
import { locations } from "@heydovetail/website/routing/locations";
import React from "react";
import { Helmet } from "react-helmet";
import image1 from "./1.jpg";
import image2 from "./2.jpg";
import image3 from "./3.png";

export default class extends React.PureComponent {
  public render() {
    const name = "For the Win";
    const description =
      "This small Brooklyn consultancy helps high growth startups nail their employee onboarding experience by using Dovetail for research analysis";

    return (
      <>
        <Helmet>
          <title>{name} – Customers – Dovetail</title>
          <meta property="og:title" content={`${name} – Customers – Dovetail`} />
          <meta name="description" content={description} />
          <meta property="og:description" content={description} />
        </Helmet>
        <LightContainer maxWidth={648} padding={{ x: PADDING, y: 0 }}>
          <ArticleHero backLocation={locations.customers()} title={name} text={description} />
        </LightContainer>
        <LightContainer padding={{ x: PADDING, y: 0 }}>
          <PhotoGrid image1={image1} image2={image2} image3={image3} />
        </LightContainer>
        <LightContainer maxWidth={648} padding={{ x: PADDING, y: QUARTER_GAP }}>
          <ArticleStats
            stats={[
              {
                title: "Industry",
                text: "Consulting"
              },
              {
                title: "Location",
                text: "New York City"
              },
              {
                location: { internal: false, url: "https://ftw.nyc", openInNewTab: true },
                title: "Website",
                text: "ftw.nyc"
              },
              {
                title: "Company size",
                text: "2 people"
              },
              {
                title: "Design & research",
                text: "1 person"
              }
            ]}
          />
          <StyledContent>
            <h3>Challenge</h3>
            <p>
              For the Win is a Brooklyn-based consulting firm for early-stage startups, led by principal Benjamin Jackson.
              Benjamin and For the Win help fast growing startups refine their employee recruiting and onboarding process.
            </p>
            <p>
              User research is an incredibly important part of how Benjamin works with clients to identify and fix gaps in their
              people processes. He conducts entry and exit interviews, organizes engagement surveys, and observes employees at
              work. Dovetail helps him combine and analyze all of this data from multiple sources, so he can identify patterns
              to report back to the startup’s management team.
            </p>
            <blockquote>
              “We are focusing more and more on embedding research best practices into our clients’ day to day.”
            </blockquote>
            <p>
              In addition, the type of data For the Win deals with means it needs to be kept secure and carefully anonymized
              before reporting since transcripts and notes contain confidential information and feedback from employees.
            </p>
            <h3>How Dovetail helps</h3>
            <p>
              Dovetail acts as a searchable research repository allowing Benjamin to aggregate, store, and analyze data from
              multiple sources like engagement surveys, onboarding and exit interviews, research notes, and insights.
            </p>
            <p>
              Benjamin pulls transcripts into Dovetail and tags them with themes around employees’ challenges or suggestions. He
              sorts the tags by frequency and looks for any that span all or most transcripts. As he sees interesting trends, he
              pulls out quotes that back up the core idea and copies them to a new insight.
            </p>
            <blockquote>
              “I’m used to the old-school spreadsheet-based approach. Dovetail is much faster and easier to use, and the
              analytics are miles better than anything I could hack together in Excel.”
            </blockquote>
            <p>
              Why Dovetail? According to Benjamin: “I had checked out a bunch of competing products, and it was obvious from the
              first week using the product that it was way more polished and usable than anything else.”
            </p>
          </StyledContent>
        </LightContainer>
      </>
    );
  }
}
