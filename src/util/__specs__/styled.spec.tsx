import "jest";
import * as styled from "../styled";

describe(styled.styled.name, () => {
  it("is a function", () => {
    expect(styled.styled).toBeInstanceOf(Function);
  });
});
