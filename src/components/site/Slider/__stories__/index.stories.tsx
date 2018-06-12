import { storiesOf } from "@heydovetail/website/util/stories";
import React from "react";
import { Slider } from "../";

storiesOf("Site/Slider", module).add("default", () => (
  <Slider
    max={100}
    maxLabel="100+ people"
    min={1}
    minLabel="1 person"
    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
      console.log(e.target.value);
    }}
  />
));
