import { storiesOf } from "@heydovetail/website/util/stories";
import * as React from "react";
import { Header } from "../";

storiesOf("Site/Header", module)
  .add("light", () => <Header loggedIn={false} />)
  .add("dark", () => <Header loggedIn={false} dark />)
  .add("with avatar", () => <Header loggedIn />);
