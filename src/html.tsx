import React from "react";

interface Props {
  body: string;
  headComponents: React.ReactNode;
  postBodyComponents: React.ReactNode;
}

export default class HTML extends React.PureComponent<Props> {
  render() {
    return (
      <html>
        <head>
          {this.props.headComponents}
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
        </head>
        <body>
          <div id="___gatsby" dangerouslySetInnerHTML={{ __html: this.props.body }} />
          {this.props.postBodyComponents}
        </body>
      </html>
    );
  }
}
