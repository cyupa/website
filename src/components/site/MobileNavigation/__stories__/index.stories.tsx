import { Header } from "@heydovetail/website/components/site/Header";
import { COLORS } from "@heydovetail/website/constants";
import { storiesOf } from "@heydovetail/website/util/stories";
import { styled } from "@heydovetail/website/util/styled";
import * as React from "react";
import { MobileNavigation } from "../";

storiesOf("Site/MobileNavigation", module).add("default", () => (
  <Body>
    <MobileNavigation>
      {api => (
        <Site onClick={api.onMobileClick}>
          <Header />
        </Site>
      )}
    </MobileNavigation>
  </Body>
));

const Body = styled("div", {
  backgroundColor: COLORS.i04
});

const Site = styled("div", {
  backgroundColor: COLORS.white,
  height: "2000px",
  padding: "32px",
  width: "100%"
});
