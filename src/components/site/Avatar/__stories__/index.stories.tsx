import { COLORS } from "@heydovetail/website/constants";
import { storiesOf } from "@heydovetail/website/util/stories";
import * as React from "react";
import { Avatar } from "../";

storiesOf("App/Avatar", module)
  .add("with url", () => <Avatar url="https://secure.gravatar.com/avatar/73678eabd75c4b5e736a24214cf1ec7c" />)
  .add("with presenceColor and size", () => (
    <Avatar presenceColor={COLORS.green} size={32} url="https://secure.gravatar.com/avatar/73678eabd75c4b5e736a24214cf1ec7c" />
  ))
  .add("with borderColor and presenceColor", () => (
    <Purple>
      <Avatar
        borderColor={COLORS.purple}
        presenceColor={COLORS.yellow}
        url="https://secure.gravatar.com/avatar/73678eabd75c4b5e736a24214cf1ec7c"
      />
    </Purple>
  ));

const Purple: React.StatelessComponent = ({ children }) => (
  <span
    style={{
      backgroundColor: COLORS.purple,
      display: "inline-flex",
      padding: "8px"
    }}
  >
    {children}
  </span>
);
