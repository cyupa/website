import { storiesOf } from "@heydovetail/website/util/stories";
import React from "react";
import { OptionalErrorOverlay } from "../";

storiesOf("Form/OptionalErrorOverlay", module).add("text input", () => (
  <OptionalErrorOverlay error="Error message">
    <input type="text" />
  </OptionalErrorOverlay>
));
