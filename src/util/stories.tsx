import { action } from "@storybook/addon-actions";
import * as reactStorybook from "@storybook/react";
import StoryRouter from "storybook-router";

export function storiesOf(name: string, module: NodeModule) {
  return reactStorybook.storiesOf(name, module).addDecorator(StoryRouter());
}

export { action };
