import { storiesOf } from "@storybook/react";
import * as React from "react";
import { OptionalErrorOverlay } from "../";

storiesOf("Form/OptionalErrorOverlay", module).add("text input", () => (
  <OptionalErrorOverlay error="Error message">
    <input type="text" />
  </OptionalErrorOverlay>
));
