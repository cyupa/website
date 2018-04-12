import { storiesOf } from "@dovetailapp/website/util/stories";
import * as React from "react";
import { Faq } from "../";

storiesOf("Site/Faq", module).add("default", () => (
  <Faq
    question="What does “unlimited users” mean?"
    answer="You might be used to hefty software licenses or paying a monthly fee for each user. With Dovetail, whether you have 5 or 500 users, the price is always $49 / month."
  />
));
