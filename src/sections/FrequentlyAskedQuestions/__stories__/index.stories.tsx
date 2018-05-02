import { Faq } from "@heydovetail/website/components/site/Faq";
import { storiesOf } from "@heydovetail/website/util/stories";
import React from "react";
import { FrequentlyAskedQuestions } from "../";

storiesOf("Sections/FrequentlyAskedQuestions", module).add("default", () => (
  <FrequentlyAskedQuestions
    faqs={[<Faq question="Why did the chicken cross the Möbius strip?" answer="To get to the same side" />]}
  />
));
