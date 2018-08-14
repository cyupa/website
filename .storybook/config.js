import { configure } from "@storybook/react";
import { cssRule } from "typestyle";
import "../src/components/layout/PageLayout/globalstyles";

cssRule("body", {
  margin: "48px"
});

const req = require.context("../src", true, /.*\.stories.tsx$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
