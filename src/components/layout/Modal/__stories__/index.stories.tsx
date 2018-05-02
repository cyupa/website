import { storiesOf } from "@heydovetail/website/util/stories";
import { action } from "@storybook/addon-actions";
import React from "react";
import { Modal } from "../";

storiesOf("Layout/Modal", module).add("default", () => <Modal onDismiss={action("onDismiss")}>Content goes here!</Modal>);
