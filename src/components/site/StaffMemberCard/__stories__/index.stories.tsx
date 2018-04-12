import * as benjamin from "@heydovetail/website/pages/company/about/benjamin.jpg";
import { storiesOf } from "@heydovetail/website/util/stories";
import * as React from "react";
import { StaffMemberCard } from "../";

storiesOf("Site/StaffMemberCard", module).add("default", () => (
  <StaffMemberCard
    bio="Benjamin is a kiwi designer, developer, and entrepreneur living in Sydney. He loves creating world-class products and believes in the power of user research to do so. Previously Benjamin has led design projects at Atlassian, Delicious, and Ubuntu."
    image={benjamin}
    name="Benjamin Humphrey"
    role="CEO &amp; Co-founder"
  />
));
