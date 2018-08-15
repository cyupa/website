import React from "react";
import { getStyles } from "typestyle";
import { renderToString } from "react-dom/server";

export const replaceRenderer = ({ bodyComponent, replaceBodyHTMLString, setHeadComponents }) => {
  const body = renderToString(bodyComponent);

  replaceBodyHTMLString(body);
  setHeadComponents([React.createElement("style", { dangerouslySetInnerHTML: { __html: getStyles() } })]);

  return;
};
