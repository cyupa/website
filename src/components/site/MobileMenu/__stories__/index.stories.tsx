import { COLORS } from "@heydovetail/website/constants";
import { action, storiesOf } from "@heydovetail/website/util/stories";
import * as React from "react";
import { MobileMenu } from "../";

storiesOf("Site/MobileMenu", module).add("default", () => (
  <div style={{ backgroundColor: COLORS.i04 }}>
    <MobileMenu onClose={action("onClose")} />
  </div>
));
