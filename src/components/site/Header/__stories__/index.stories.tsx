import { storiesOf } from "@heydovetail/website/util/stories";
import * as React from "react";
import { Header } from "../";

storiesOf("Site/Header", module)
  .add("light", () => <Header />)
  .add("dark", () => <Header dark />);
