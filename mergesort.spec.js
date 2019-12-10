describe("Split Array function", function() {
  it("is able to split an array into two halves", function() {
    expect(split([1, 2, 3, 4])).toEqual([
      [1, 2],
      [3, 4]
    ]);
  });
});

describe("Merge function", function() {
  it("is able to merge two sorted arrays into one sorted array", function() {
    expect(merge([1, 2], [3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
  });
});

describe("Merge Sort function", function() {
  it("merge sorts array", function() {
    expect(mergeSort([1, 5, 2, 4, 3])).toEqual([1, 2, 3, 4, 5]);
  });
  it("merge sorts array", function() {
    expect(mergeSort([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5]);
  });
  it("merge sorts array", function() {
    expect(mergeSort([7, 8, 10, 5, 4, 3, 2, 1])).toEqual([
      1,
      2,
      3,
      4,
      5,
      7,
      8,
      10
    ]);
  });
});
