import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";
import * as React from "react";
import { Modal } from "../";

storiesOf("layout/Modal", module).add("default", () => <Modal onDismiss={action("onDismiss")}>Content goes here!</Modal>);
