import * as customers from "@heydovetail/website/components/icons/customers";
import { storiesOf } from "@heydovetail/website/util/stories";
import * as React from "react";
import { CustomerLogos } from "../";

storiesOf("Sections/Customers", module).add("default", () => (
  <CustomerLogos customers={[customers.arm, customers.atlassian, customers.deloitte, customers.nike]} />
));
