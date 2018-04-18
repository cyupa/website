import { action, storiesOf } from "@heydovetail/website/util/stories";
import * as React from "react";
import { Header } from "../";

storiesOf("Site/Header", module)
  .add("light", () => <Header menuOpen={false} onMenuToggle={action("onMenuToggle")} />)
  .add("dark", () => <Header dark menuOpen={false} onMenuToggle={action("onMenuToggle")} />);
