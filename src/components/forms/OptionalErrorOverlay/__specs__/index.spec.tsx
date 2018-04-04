import "jest";
import * as React from "react";
import { OptionalErrorOverlay } from "../";
import { assertReactSnapshot } from "../../../../util/test";

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
