import * as React from "react";
import { storiesOf } from "src/util/stories";
import { Date } from "../";

storiesOf("Site/Date", module).add("default", () => <Date>April 11, 2018</Date>);
