import * as React from "react";
import { storiesOf } from "src/util/stories";
import { Header } from "../";

storiesOf("Site/Header", module)
  .add("light", () => <Header />)
  .add("dark", () => <Header dark />);
