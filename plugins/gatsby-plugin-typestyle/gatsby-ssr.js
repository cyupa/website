import React from "react";
import { getStyles } from "typestyle";
import { renderToString } from "react-dom/server";

exports.replaceRenderer = ({ bodyComponent, replaceBodyHTMLString, setHeadComponents }) => {
  const body = renderToString(bodyComponent);

  replaceBodyHTMLString(body);
  setHeadComponents([React.createElement("style", null, getStyles())]);

  return;
};
