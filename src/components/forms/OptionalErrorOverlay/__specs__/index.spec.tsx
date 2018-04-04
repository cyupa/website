import { assertReactSnapshot } from "dovetail/util/test";
import "jest";
import * as React from "react";
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
