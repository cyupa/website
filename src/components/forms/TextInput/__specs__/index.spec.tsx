import "jest";
import * as React from "react";
import { TextInput } from "../";
import { assertReactSnapshot } from "../../../../util/test";

describe(TextInput.name, () => {
  describe("snapshots", () => {
    it("empty", () => {
      assertReactSnapshot(<TextInput />);
    });

    it("placeholder", () => {
      assertReactSnapshot(<TextInput placeholder="First name" />);
    });

    it("value", () => {
      assertReactSnapshot(<TextInput value="Bradley Ayers" />);
    });

    it("error", () => {
      assertReactSnapshot(<TextInput error="Invalid value" />);
    });

    it("on change", () => {
      assertReactSnapshot(<TextInput onChange={() => {}} />);
    });
  });
});
