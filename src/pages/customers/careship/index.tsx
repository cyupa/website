import { ArticleStats } from "@heydovetail/website/components/site/ArticleStats";
import { HeroText } from "@heydovetail/website/components/site/HeroText";
import { LightContainer } from "@heydovetail/website/components/site/LightContainer";
import { StyledContent } from "@heydovetail/website/components/site/PageContent";
import { PhotoGrid } from "@heydovetail/website/components/site/PhotoGrid";
import { ARTICLE_WIDTH, PADDING, QUARTER_GAP } from "@heydovetail/website/constants";
import React from "react";
import { Helmet } from "react-helmet";
import image1 from "./1.jpg";
import image2 from "./2.jpg";
import logo from "./logo.png";

export default class extends React.PureComponent {
  public render() {
    const title = "Careship";
    const description =
      "This Berlin-based startup wants to fundamentally change the way care is delivered, and user research with Dovetail plays a critical role";

    return (
      <>
        <Helmet>
          <title>{title} – Customers – Dovetail</title>
          <meta property="og:title" content={`${title} – Customers – Dovetail`} />
          <meta name="description" content={description} />
          <meta property="og:description" content={description} />
        </Helmet>
        <LightContainer maxWidth={ARTICLE_WIDTH}>
          <HeroText center={false} title={title} text={description} />
        </LightContainer>
        <LightContainer padding={{ x: PADDING, y: 0 }}>
          <PhotoGrid image1={image1} image2={image2} image3={logo} />
        </LightContainer>
        <LightContainer maxWidth={ARTICLE_WIDTH} padding={{ x: PADDING, y: QUARTER_GAP }}>
          <ArticleStats
            stats={[
              {
                title: "Industry",
                text: "Healthcare"
              },
              {
                title: "Location",
                text: "Berlin, Germany"
              },
              {
                location: { internal: false, url: "https://careship.de", openInNewTab: true },
                title: "Website",
                text: "careship.de"
              },
              {
                title: "Company size",
                text: "100 people"
              },
              {
                title: "Design & research",
                text: "4 people"
              }
            ]}
          />
          <StyledContent>
            <h3>Challenge</h3>
            <p>
              “We want to fundamentally change the way care is delivered”, according to Anne Büttner, a User Experience
              Researcher at the Berlin-based startup Careship. They know that research is critical in order to become “the
              largest and most used platform for care booking in Europe.”
            </p>
            <p>
              User research is employed at every step of the product development process. In the discovery phase, researchers
              dig into their target group’s needs and pain points to identify product opportunities. They continue with
              prototyping and testing to see which ideas solve their target group’s problems best, and for their finished
              product, Careship conducts usability testing to continuously improve their user’s experience with their products.
            </p>
            <p>
              Getting others in front of research is a key tactic in how researchers share their work, as Anne highlights: “As a
              researcher I am the user advocate, but never see myself as an expert who educates others on the user’s needs.
              Instead I invite colleagues to frequently participate in user testing sessions.”
            </p>
            <blockquote>
              “I want everyone at Careship to engage with our users and have their own first-hand learning experiences and
              insights.”
            </blockquote>
            <p>
              The company is growing. Within the last six months Careship almost doubled in size—going from a small startup to a
              medium-sized business—and the process of sharing knowledge and insights from user research has to be adapted.
            </p>
            <p>
              Researchers are beginning to work more closely with Careship’s two business intelligence engineers which allows
              them to first identify behaviour patterns in quantitative data early on, and then understand the underlying
              motivations with in-depth qualitative research later.
            </p>
            <p>
              They are starting to enable product managers to conduct their own usability tests. This frees up Anne and the
              research &amp; design team to give them more time to engage in long-term strategic research projects.
            </p>
            <h3>How Dovetail helps</h3>
            <blockquote>
              “Dovetail enables us to make use of research data even while the study is still running. This allows us to turn
              insights into actionable advice without a time lag. As a startup in a quickly changing market this is a strong
              competitive advantage.”
            </blockquote>
            <p>
              Instead of creating long reports at the end of a study, Dovetail enables Careship’s product team to store, share,
              and collaborate on research findings while they’re still in the middle of the study. This means they can operate a
              faster research process, avoid lengthy reports that almost nobody reads, and get more research done in the same
              amount of time.
            </p>
            <blockquote>
              “My vision is that I can empower every employee to consult the user data with Dovetail for decision making on
              their own.”
            </blockquote>
            <p>
              Dovetail has solved a number of challenges for Careship’s research team, like centralizing data (“No more chaos!
              Raw data, insights, audio files, video files, photos and sketches all in one place), research analysis (“Quick,
              easy and adjustable! With the tagging system I can quickly gather all data of interest for very different teams”),
              and real time collaboration (“I feed all my data into Dovetail immediately so my colleagues can review it”).
            </p>
            <blockquote>
              “It’s easy to share insights in digestible bites. When more background information is needed we can access the
              context of the insight with just one click.”
            </blockquote>
            <p>
              Most of all, Dovetail lets Anne and her team share bite-sized user research insights with the rest of the
              organization, while keeping them directly linked to the raw source material. This lets Careship efficiently share
              knowledge around, helping them offer customers and caregivers the best tools to effectively organize, deliver and
              manage individual care across Europe.
            </p>
          </StyledContent>
        </LightContainer>
      </>
    );
  }
}
