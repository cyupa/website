import { storiesOf } from "@storybook/react";
import * as React from "react";
import { Header } from "../";

storiesOf("Site/Header", module)
  .add("light", () => <Header />)
  .add("dark", () => <Header theme="dark" />);
