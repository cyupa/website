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
import logo from "./logo.png";

export default class extends React.PureComponent {
  public render() {
    const title = "Intrepid Group";
    const description =
      "Intrepid Group is the largest provider of adventure travel experiences in the world, with a rapidly growing user experience and research team";

    return (
      <>
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
                location: { internal: false, url: "https://intrepidgroup.travel", openInNewTab: true },
                title: "Website",
                text: "intrepidgroup.travel"
              },
              {
                title: "Company size",
                text: "1,700 people"
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
              Manager told us that in 2017, the company “focused on better understanding our customers so that we could provide
              them with the best travel experience possible.”
            </p>
            <p>
              Gemma and her team have collected and analysed more than 50,000 pieces of feedback from customers around their
              overall experience, and throughout their entire customer journey. They’ve increased their UX team by 250%, and in
              2017 alone, ran 88 individual usability testing sessions on three continents, resulting in 368 videos and 3,000
              minutes of footage.
            </p>
            <br />
            <PhotoGrid direction="row-reverse" image1={image5} image2={image3} image3={image4} />
          </StyledContent>
        </LightContainer>
      </>
    );
  }
}
