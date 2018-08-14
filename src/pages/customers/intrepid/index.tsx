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
import image3 from "./3.jpg";
import image4 from "./4.jpg";
import image5 from "./5.jpg";
import image6 from "./6.jpg";
import image7 from "./7.jpg";
import image8 from "./8.jpg";
import logo from "./logo.png";

export default class extends React.PureComponent {
  public render() {
    const title = "Intrepid Group";
    const description =
      "The world’s largest provider of adventure travel experiences uses Dovetail to store and analyze research data from a rapidly growing user experience team";

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
                text: "Travel"
              },
              {
                title: "Location",
                text: "Melbourne, Australia"
              },
              {
                location: { internal: false, url: "https://www.intrepidgroup.travel", openInNewTab: true },
                title: "Website",
                text: "intrepidgroup.travel"
              },
              {
                title: "Company size",
                text: "1,800 people"
              },
              {
                title: "Design & research",
                text: "7 people"
              }
            ]}
          />
          <StyledContent>
            <h3>Challenge</h3>
            <p>
              Intrepid Group’s mission is to “Change the Way People See the World”. Their range of B2C and B2B brands like
              Intrepid Travel, Adventure Tours Australia, and Peregrine cater for all ages, budgets and appetites for adventure.
            </p>
            <p>
              Recently, they’ve been building up their user experience and research muscle. Gemma Sherwood, Intrepid Group’s UX
              Manager told us that the company is now focusing on “better understanding our customers so that we could provide
              them with the best travel experience possible.”
            </p>
            <p>
              This focus is reflected in stats from their recent annual report. In one year alone, Gemma and her team collected
              and analyzed more than 50,000 pieces of feedback from customers around their overall experience, and throughout
              their entire customer journey. They grew their UX team by 250% and run 88 individual usability testing sessions on
              three continents, resulting in 368 videos and 3,000 minutes of footage.
            </p>
            <p>
              Like many companies today, the growth of Intrepid Group’s UX team shows no sign of slowing down. Gemma’s planning
              to double her team again in the next couple of months, adding team members across three time zones.
            </p>
            <blockquote>
              “Our growth means we’re going to face new challenges of scale, in terms of practice alignment, sharing insights,
              speed and information management.”
            </blockquote>
            <PhotoGrid direction="row-reverse" image1={image4} image2={image3} image3={image7} />
            <p>
              Cluny McCullagh, a lead researcher at Intrepid Group, says the primary challenge is finding a place to centralize
              raw research and insights from across the company, and the globe. “We maintain good speed when synthesizing
              research, and we deliver insights to different stakeholders through presentations, videos, and digital
              whiteboards”, Cluny explains. “However, when stakeholders miss a session or don’t have access to a digital
              whiteboard, we’re often forced to trawl back through research outcomes to provide information”.
            </p>
            <blockquote>“A central, searchable repository to address most enquiries is our goal to fix this issue.”</blockquote>
            <p>
              Research and design at Intrepid Group are configured in a hybrid model, with centralized researchers and embedded
              designers. Once a project is prioritized, researchers engage stakeholders for generative research activities, and
              then onboard the designers and project team with results and opportunities during sprint zero.
            </p>
            <PhotoGrid image1={image5} image2={image6} image3={image8} />
            <h3>How Dovetail helps</h3>
            <blockquote>“Dovetail has proved exceptional in aiding researchers to return to raw data and ideas.”</blockquote>
            <p>
              The UX team at Intrepid Group are early in their adoption of Dovetail, but they’re already seeing value. Dovetail
              has helped researchers create a hierarchy of qualitative research results which is starting to guide the structure
              of their insights in other locations. Now, more people are getting involved to improve their decision-making based
              on information in the searchable research repository.
            </p>
            <p>
              Initially, researchers set up Dovetail with the goal of it acting as a repository for their research, which meant
              only their immediate team had access. Now, the rest of the UX team—including UI, UX, and visual designers—are
              learning to refer to data in Dovetail when they have a question outside the existing research for their project.
            </p>
            <p>
              With researchers and designers onboard, and the research repository growing, Gemma says the UX team have turned
              their attention to other departments like Marketing and Insights, with the goal to get them involved by the end of
              the year.
            </p>
            <blockquote>
              “Our broader goal is for the Insights and Marketing departments to utilize Dovetail as a searchable research
              library to improve their decisions and ground them in customer experience.”
            </blockquote>
          </StyledContent>
        </LightContainer>
      </PageLayout>
    );
  }
}
