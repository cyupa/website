import "jest";
import { OptionalErrorOverlay } from "../";
import * as styles from "../styles";

describe(OptionalErrorOverlay.name, () => {
  describe("snapshots", () => {
    it("container", () => {
      expect(styles.container).toMatchSnapshot();
    });
  });
});
