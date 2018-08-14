import { PageLayout } from "@heydovetail/website/components/layout/PageLayout";
import { ArticleHero } from "@heydovetail/website/components/site/ArticleHero";
import { ArticleStats } from "@heydovetail/website/components/site/ArticleStats";
import { LightContainer } from "@heydovetail/website/components/site/LightContainer";
import { StyledContent } from "@heydovetail/website/components/site/PageContent";
import { PhotoGrid } from "@heydovetail/website/components/site/PhotoGrid";
import { ARTICLE_WIDTH, PADDING, QUARTER_GAP } from "@heydovetail/website/constants";
import React from "react";
import { Helmet } from "react-helmet";
import image1 from "./1.jpg";
import image2 from "./2.jpg";
import logo from "./logo.png";
import screenshot from "./screenshot.png";

export default class extends React.PureComponent {
  public render() {
    const title = "For the Win";
    const description =
      "This New York based consultancy helps early-stage startups build a great workplace by using Dovetail for user research analysis";

    return (
      <PageLayout>
        <Helmet>
          <title>{title} – Customers – Dovetail</title>
          <meta property="og:title" content={`${title} – Customers – Dovetail`} />
          <meta name="description" content={description} />
          <meta property="og:description" content={description} />
        </Helmet>
        <ArticleHero title={title} text={description} />
        <LightContainer padding={{ x: PADDING, y: 0 }}>
          <PhotoGrid image1={image1} image2={image2} image3={logo} />
        </LightContainer>
        <LightContainer maxWidth={ARTICLE_WIDTH} padding={{ x: PADDING, y: QUARTER_GAP }}>
          <ArticleStats
            stats={[
              {
                title: "Industry",
                text: "Consulting"
              },
              {
                title: "Location",
                text: "New York City, USA"
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
              For the Win is a Brooklyn-based consulting firm for early-stage startups led by principal Benjamin Jackson.
              Benjamin and For the Win consult with fast growing startups to design lightweight processes that keep things
              moving without slowing people down. In Benjamin’s words, “we exist to make people feel awesome about going to
              work.”
            </p>
            <p>
              User research is an important part of how Benjamin works with clients to identify and fix gaps in their people
              processes. With each client, he conducts dozens of interviews, organizes engagement surveys for employees, and
              observes people during their onboarding process at his client’s offices. Identifying patterns across these
              different sources is a critical part of his analysis process.
            </p>
            <blockquote>
              “We are focusing more and more on embedding research best practices into our clients’ day to day.”
            </blockquote>
            <p>
              The type of data For the Win deals with means it needs to be kept secure and carefully anonymized before reporting
              since transcripts and notes contain confidential information and feedback from employees.
            </p>
            <h3>How Dovetail helps</h3>
            <blockquote>“It’s where most of the hard work happens.”</blockquote>
            <p>
              Dovetail acts as a searchable research repository allowing Benjamin to aggregate, store, and analyze data from
              multiple sources like engagement surveys, onboarding and exit interviews, research notes, and insights.
            </p>
            <p>
              With Dovetail, Benjamin highlights patterns across multiple pieces of data. He then creates insights that he uses
              to report back to the startup’s management team, along with suggestions for process improvements.
            </p>
            <blockquote>
              “I’m used to the old-school spreadsheet-based approach. Dovetail is much faster and easier to use, and the
              analytics are miles better than anything I could hack together in Excel.”
            </blockquote>
            <p>
              Benjamin pulls transcripts into Dovetail and tags them with themes around employees’ challenges or suggestions. He
              sorts the tags by frequency and looks for any that span all or most transcripts. As he sees interesting trends, he
              pulls out quotes that back up the core idea and copies them to a new insight.
            </p>
            <img className="gatsby-resp-image-wrapper" src={screenshot} style={{ width: "100%" }} />
            <blockquote>
              “I had checked out a bunch of competing products, and it was obvious from the first week using Dovetail that it
              was way more polished and usable than anything else.”
            </blockquote>
          </StyledContent>
        </LightContainer>
      </PageLayout>
    );
  }
}
