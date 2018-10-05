import illustrationSpace from "@heydovetail/website/components/illustrations/space.svg";
import { storiesOf } from "@heydovetail/website/util/stories";
import React from "react";
import { Hero } from "../";

storiesOf("Site/Hero", module)
  .add("Centered", () => <Hero center title="The research platform for teams." />)
  .add("Simple", () => <Hero title="The research platform for teams." />)
  .add("Subtitle", () => (
    <Hero
      title="The research platform for teams."
      subtitle="Dovetail helps you store, analyze, and collaborate on user research in one place, making it easy to see patterns, discover insights, and decide what to do next."
    />
  ))
  .add("Text", () => (
    <Hero
      title="The research platform for teams."
      text="Dovetail helps you store, analyze, and collaborate on user research in one place, making it easy to see patterns, discover insights, and decide what to do next."
    />
  ))
  .add("Sign up button", () => (
    <Hero
      title="The research platform for teams."
      text="Dovetail helps you store, analyze, and collaborate on user research in one place, making it easy to see patterns, discover insights, and decide what to do next."
      showSignUp
    />
  ))
  .add("Image", () => (
    <Hero
      image={illustrationSpace}
      title="The research platform for teams."
      text="Dovetail helps you store, analyze, and collaborate on user research in one place, making it easy to see patterns, discover insights, and decide what to do next."
      showSignUp
    />
  ));
