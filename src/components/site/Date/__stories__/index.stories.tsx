import { storiesOf } from "@dovetailapp/website/util/stories";
import * as React from "react";
import { Date } from "../";

storiesOf("Site/Date", module).add("default", () => <Date>April 11, 2018</Date>);
