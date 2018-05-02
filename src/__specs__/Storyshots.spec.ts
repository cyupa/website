import initStoryshots, { renderOnly } from "@storybook/addon-storyshots";
import path from "path";

initStoryshots({
  configPath: path.join(__dirname, "..", "..", ".storybook"),
  test: renderOnly
});
