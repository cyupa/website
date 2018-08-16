import React from "react";
import { Helmet } from "react-helmet";
import favicon from "./favicon.png";
import thumbnail from "./thumbnail.png";

// These are the default meta tags for every page.
// If a page uses Helmet to specify something more specific,
// it will override the meta tag here.

export class DefaultMetaTags extends React.PureComponent {
  public render() {
    return (
      <Helmet>
        <meta charSet="utf-8" />
        <title>Dovetail &ndash; Customer feedback &amp; research platform for teams</title>
        <link rel="shortcut icon" href={favicon} type="image/x-icon" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Dovetail combines customer feedback and user research in one place, making it easy to see patterns, discover insights, and decide what to do next. Our customers include Atlassian, Deloitte, Engima, HotelsCombined, Westpac, and more."
        />
        <meta
          name="keywords"
          content="customer feedback, data, data analysis, design software, design tool, dovetail, feedback, feedback management, product design, qualitative data analysis, research, research analysis, research repository, saas software, sydney australia, user research, ux design"
        />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@hidovetail" />
        <meta property="og:title" content="A customer feedback &amp; research platform for teams — Dovetail" />
        <meta property="og:type" content="product" />
        <meta property="og:image" content={process.env.GATSBY_BASE_URL + thumbnail} />
        <meta
          property="og:description"
          content="Dovetail combines customer feedback and user research in one place, making it easy to see patterns, discover insights, and decide what to do next. Our customers include Atlassian, Deloitte, Engima, HotelsCombined, Westpac, and more."
        />
      </Helmet>
    );
  }
}
