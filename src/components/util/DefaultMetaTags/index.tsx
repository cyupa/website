import * as thumbnail from "!file-loader!./thumbnail.png";
import * as React from "react";
import { Helmet } from "react-helmet";

// These are the default meta tags for every page.
// If a page uses Helmet to specify something more specific,
// it will override the meta tag here.

export class DefaultMetaTags extends React.PureComponent {
  public render() {
    return (
      <Helmet>
        <title>Customer feedback &amp; research platform for teams — Dovetail</title>
        <meta
          name="description"
          content="The best products and services come from listening to your customers. Dovetail enables companies to easily organize, analyze, and share their customer feedback and user research data, and uncover actionable insights to improve their products and services. Our customers range from enterprises like Atlassian, Deloitte and Westpac, to smaller agencies, startups and government organizations like Engima, HotelsCombined and CSIRO."
        />
        <meta
          name="keywords"
          content="customer feedback, data, data analysis, design software, design tool, dovetail, feedback, feedback management, product design, qualitative data analysis, research, research analysis, research repository, saas software, sydney australia, user research, ux design"
        />
        <meta name="twitter:card" content="summary" />
        <meta property="og:title" content="Customer feedback &amp; research platform for teams — Dovetail" />
        <meta property="og:type" content="product" />
        <meta property="og:image" content={thumbnail} />
        <meta
          property="og:description"
          content="The best products and services come from listening to your customers. Dovetail enables companies to easily organize, analyze, and share their customer feedback and user research data, and uncover actionable insights to improve their products and services. Our customers range from enterprises like Atlassian, Deloitte and Westpac, to smaller agencies, startups and government organizations like Engima, HotelsCombined and CSIRO."
        />
      </Helmet>
    );
  }
}
