import * as React from "react";

// Load production style
let styles: string;
if (process.env.NODE_ENV === "production") {
  try {
    styles = require("!raw-loader!../public/styles.css");
  } catch (err) {
    console.log(err);
  }
}

interface Props {
  body: string;
  headComponents: React.ReactNode;
  postBodyComponents: React.ReactNode;
}

class Html extends React.PureComponent<Props> {
  public render() {
    const css =
      process.env.NODE_ENV === `production` ? (
        <style id="gatsby-inlined-css" dangerouslySetInnerHTML={{ __html: styles }} />
      ) : null;

    const { body, headComponents, postBodyComponents } = this.props;

    return (
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
          <title>Customer feedback &amp; research platform for teams – Dovetail</title>
          <link rel="canonical" href="https://dovetailapp.com" />
          <link href="https://fonts.googleapis.com/css?family=Rubik:400,500" rel="stylesheet" />
          {headComponents}
          {css}
        </head>
        <body>
          <div id="___gatsby" dangerouslySetInnerHTML={{ __html: body }} />
          {postBodyComponents}
        </body>
      </html>
    );
  }
}

// Use `module.exports` to be compliante with `webpack-require` import method
module.exports = Html;
