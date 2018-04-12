import { storiesOf } from "@heydovetail/website/util/stories";
import * as React from "react";
import { Testimonial } from "../";

storiesOf("Site/Testimonial", module).add("default", () => (
  <Testimonial
    company="Dovetail"
    image="https://s3.amazonaws.com/dovetail-dev/users/photos/ac37696c-66bf-11e7-bcc5-22000b774824/medium.jpg"
    name="Benjamin Humphrey"
    quote="My team has started using Dovetail even more and the amount of productivity increase we are witnessing is amazing. Your app is simply too good!"
    role="Founder"
  />
));
