import illustrationSpace from "@heydovetail/website/components/illustrations/space.svg";
import { storiesOf } from "@heydovetail/website/util/stories";
import React from "react";
import { Hero } from "../";

storiesOf("Site/Hero", module)
  .add("Centered", () => <Hero center title="Understand your customers" />)
  .add("Simple", () => <Hero title="Understand your customers" />)
  .add("Subtitle", () => (
    <Hero
      title="Understand your customers."
      subtitle="Dovetail combines customer feedback and user research in one place, making it easy to see patterns, discover insights, and decide what to do next."
    />
  ))
  .add("Text", () => (
    <Hero
      title="Understand your customers."
      text="Dovetail combines customer feedback and user research in one place, making it easy to see patterns, discover insights, and decide what to do next."
    />
  ))
  .add("Sign up button", () => (
    <Hero
      title="Understand your customers."
      text="Dovetail combines customer feedback and user research in one place, making it easy to see patterns, discover insights, and decide what to do next."
      showSignUp
    />
  ))
  .add("Image", () => (
    <Hero
      image={illustrationSpace}
      title="Understand your customers."
      text="Dovetail combines customer feedback and user research in one place, making it easy to see patterns, discover insights, and decide what to do next."
      showSignUp
    />
  ));
