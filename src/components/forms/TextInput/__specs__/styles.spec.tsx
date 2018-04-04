import "jest";
import * as styles from "../styles";

describe("TextInput styles", () => {
  describe("snapshots", () => {
    it("normal", () => {
      expect(styles.normal).toMatchSnapshot();
    });

    it("error", () => {
      expect(styles.error).toMatchSnapshot();
    });
  });
});
