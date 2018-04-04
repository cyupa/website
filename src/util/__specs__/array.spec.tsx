import "jest";
import * as array from "../array";

describe(array.sortedIndex.name, () => {
  function sortedIndexAsc(arr: number[], item: number) {
    return array.sortedIndex(arr, item, [array.sortComparatorAsc(x => x)]);
  }

  describe("0 items", () => {
    it("returns 0", () => {
      expect(sortedIndexAsc([], 0)).toBe(0);
    });
  });

  describe("1 item", () => {
    it("returns 0 for a lower value", () => {
      expect(sortedIndexAsc([5], 4)).toBe(0);
    });

    it("returns 1 for a greater value", () => {
      expect(sortedIndexAsc([5], 6)).toBe(1);
    });

    it("returns 1 for an equal value", () => {
      expect(sortedIndexAsc([5], 5)).toBe(1);
    });
  });

  describe("2 items", () => {
    it("returns 0 for a lower value", () => {
      expect(sortedIndexAsc([5, 7], 4)).toBe(0);
    });

    it("returns 1 for a middle value", () => {
      expect(sortedIndexAsc([5, 7], 6)).toBe(1);
    });

    it("returns 2 for a greater value", () => {
      expect(sortedIndexAsc([5, 7], 8)).toBe(2);
    });

    it("returns 1 for an equal-to-first value", () => {
      expect(sortedIndexAsc([5, 7], 5)).toBe(1);
    });

    it("returns 1 for an equal-to-second value", () => {
      expect(sortedIndexAsc([5, 7], 7)).toBe(1);
    });
  });

  describe("3 items", () => {
    it("returns 0 for a lower value", () => {
      expect(sortedIndexAsc([5, 7, 9], 4)).toBe(0);
    });

    it("returns 1 for a between-first-and-second value", () => {
      expect(sortedIndexAsc([5, 7, 9], 6)).toBe(1);
    });

    it("returns 2 for a between-second-and-third value", () => {
      expect(sortedIndexAsc([5, 7, 9], 8)).toBe(2);
    });

    it("returns 3 for a greater-than-third value", () => {
      expect(sortedIndexAsc([5, 7, 9], 10)).toBe(3);
    });
  });
});

describe(array.sortedInsert.name, () => {
  function sortedInsertAsc(arr: number[], item: number) {
    return array.sortedInsert(arr, item, [array.sortComparatorAsc(x => x)]);
  }

  it("does not mutate original", () => {
    const arr = [0];
    sortedInsertAsc(arr, 1);
    expect(arr).toMatchObject([0]);
  });

  describe("0 items", () => {
    it("returns the new item", () => {
      expect(sortedInsertAsc([], 0)).toMatchObject([0]);
    });
  });

  describe("1 item", () => {
    it("lower", () => {
      expect(sortedInsertAsc([5], 4)).toMatchObject([4, 5]);
    });

    it("greater", () => {
      expect(sortedInsertAsc([5], 6)).toMatchObject([5, 6]);
    });

    it("equal", () => {
      expect(sortedInsertAsc([5], 5)).toMatchObject([5, 5]);
    });
  });

  describe("2 items", () => {
    it("lower", () => {
      expect(sortedInsertAsc([5, 7], 4)).toMatchObject([4, 5, 7]);
    });

    it("middle", () => {
      expect(sortedInsertAsc([5, 7], 6)).toMatchObject([5, 6, 7]);
    });

    it("greater", () => {
      expect(sortedInsertAsc([5, 7], 8)).toMatchObject([5, 7, 8]);
    });

    it("equal first", () => {
      expect(sortedInsertAsc([5, 7], 5)).toMatchObject([5, 5, 7]);
    });

    it("equal second", () => {
      expect(sortedInsertAsc([5, 7], 7)).toMatchObject([5, 7, 7]);
    });

    it("equal last", () => {
      expect(sortedInsertAsc([5, 7], 7)).toMatchObject([5, 7, 7]);
    });
  });

  describe("3 items", () => {
    it("first", () => {
      expect(sortedInsertAsc([5, 7, 9], 4)).toMatchObject([4, 5, 7, 9]);
    });

    it("lower", () => {
      expect(sortedInsertAsc([5, 7, 9], 6)).toMatchObject([5, 6, 7, 9]);
    });

    it("upper", () => {
      expect(sortedInsertAsc([5, 7, 9], 8)).toMatchObject([5, 7, 8, 9]);
    });

    it("top", () => {
      expect(sortedInsertAsc([5, 7, 9], 10)).toMatchObject([5, 7, 9, 10]);
    });
  });
});

describe(array.get.name, () => {
  it("returns the value if in bounds", () => {
    expect(array.get(["foo"], 0, "bar")).toBe("foo");
  });

  it("returns the fallback if out of bounds", () => {
    expect(array.get(["foo"], 1, "bar")).toBe("bar");
  });
});

describe(array.zeroes.name, () => {
  it("examples", () => {
    expect(array.zeroes(0)).toMatchObject([]);
    expect(array.zeroes(1)).toMatchObject([0]);
    expect(array.zeroes(2)).toMatchObject([0, 0]);
  });
});
