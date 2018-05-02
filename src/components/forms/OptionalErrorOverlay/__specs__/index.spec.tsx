import { assertReactSnapshot } from "@heydovetail/website/util/test";
import "jest";
import React from "react";
import { OptionalErrorOverlay } from "../";

describe(OptionalErrorOverlay.name, () => {
  describe("snapshots", () => {
    it("without error", () => {
      assertReactSnapshot(
        <OptionalErrorOverlay>
          <input type="text" />
        </OptionalErrorOverlay>
      );
    });
  });
});
