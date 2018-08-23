import React from "react";
import { getStyles } from "typestyle";
import { renderToString } from "react-dom/server";

export const replaceRenderer = ({ bodyComponent, replaceBodyHTMLString, setHeadComponents }) => {
  const body = renderToString(bodyComponent);
  replaceBodyHTMLString(body);

  const styles = React.createElement("style", { dangerouslySetInnerHTML: { __html: getStyles() } });
  setHeadComponents([styles]);
};
