import * as React from "react";
import { storiesOf } from "src/util/stories";
import { OptionalErrorOverlay } from "../";

storiesOf("Form/OptionalErrorOverlay", module).add("text input", () => (
  <OptionalErrorOverlay error="Error message">
    <input type="text" />
  </OptionalErrorOverlay>
));
