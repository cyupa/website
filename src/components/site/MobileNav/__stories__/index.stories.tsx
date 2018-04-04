import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";
import * as React from "react";
import { MobileNav } from "../";

storiesOf("Site/MobileNav", module).add("default", () => <MobileNav onDismiss={action("onDismiss")} />);
