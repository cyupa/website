import abhilash from "@heydovetail/website/avatars/abhilash.jpg";
import { storiesOf } from "@heydovetail/website/util/stories";
import React from "react";
import { SocialProof } from "../";

storiesOf("Sections/SocialProof", module).add("default", () => (
  <SocialProof
    testimonials={[
      {
        company: "Freshworks",
        url: "https://freshworks.com",
        image: abhilash,
        name: "Abhilash",
        quote:
          "My team has started using Dovetail even more and the amount of productivity increase we are witnessing is amazing. Your app is simply too good!",
        role: "Senior Researcher"
      }
    ]}
  />
));
