import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";
import * as React from "react";
import { TextInput } from "../";

storiesOf("Form/TextInput", module)
  .add("placeholder", () => <TextInput placeholder="First name" />)
  .add("value", () => <TextInput value="Bradley Ayers" />)
  .add("error", () => <TextInput error="Invalid value" />)
  .add("on change", () => <TextInput onChange={action("onChange")} />)
  .add("empty", () => <TextInput />);
