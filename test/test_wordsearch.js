const chai = require("chai");
const assert = chai.assert;

const wordSearch = require("../wordsearch.js");

describe("#wordSearch()", function () {
  it("Test 1. should return false if the word is not present", function () {
    const result = wordSearch(
      [
        ["A", "W", "C", "F", "Q", "U", "A", "L"],
        ["S", "E", "I", "N", "F", "E", "L", "D"],
        ["Y", "F", "C", "F", "Q", "U", "A", "L"],
        ["H", "M", "J", "T", "E", "V", "R", "G"],
        ["W", "H", "C", "S", "Y", "E", "R", "L"],
        ["B", "F", "R", "E", "N", "E", "Y", "B"],
        ["U", "B", "T", "W", "A", "P", "A", "I"],
        ["O", "D", "C", "A", "K", "U", "A", "S"],
        ["E", "Z", "K", "F", "Q", "U", "A", "L"],
      ],
      "FRANK"
    );

    assert.isFalse(result);
  });

  it("Test 2: should return true if the word is present", function () {
    const result = wordSearch(
      [
        ["A", "W", "C", "F", "Q", "U", "A", "L"],
        ["S", "E", "I", "N", "F", "E", "L", "D"],
        ["Y", "F", "C", "F", "Q", "U", "A", "L"],
        ["H", "M", "J", "T", "E", "V", "R", "G"],
        ["W", "H", "C", "S", "Y", "E", "R", "L"],
        ["B", "F", "R", "E", "N", "E", "Y", "B"],
        ["U", "B", "T", "W", "A", "P", "A", "I"],
        ["O", "D", "C", "A", "K", "U", "A", "S"],
        ["E", "Z", "K", "F", "Q", "U", "A", "L"],
      ],
      "SEINFELD"
    );

    assert.isTrue(result);
  });

  it("Test 3: should return true if the word is present vertically", function () {
    const result = wordSearch(
      [
        ["A", "W", "C", "F", "Q", "U", "A", "L"],
        ["S", "E", "I", "N", "F", "E", "L", "D"],
        ["Y", "F", "C", "F", "Q", "U", "A", "L"],
        ["H", "M", "J", "T", "E", "V", "R", "G"],
        ["W", "H", "C", "S", "Y", "E", "R", "L"],
        ["B", "F", "R", "E", "N", "E", "Y", "B"],
        ["U", "B", "T", "W", "A", "P", "A", "I"],
        ["O", "D", "C", "A", "K", "U", "A", "S"],
        ["C", "Z", "K", "F", "Q", "U", "A", "L"],
        ["E", "E", "R", "E", "B", "U", "S", "X"],
        ["R", "E", "B", "E", "U", "S", "X", "X"],
        ["E", "E", "S", "E", "U", "S", "X", "X"],
        ["B", "S", "U", "S", "U", "S", "X", "X"],
        ["U", "U", "S", "U", "U", "S", "X", "X"],
        ["S", "S", "S", "U", "S", "S", "X", "X"],
      ],
      "CEREBUS"
    );




    

    assert.isTrue(result);
  });

  it("Test 4: should return false if the letters array is empty", function () {
    const result = wordSearch([], "LHL");

    assert.isFalse(result);
  });

  it("Test 5: should return true if the word is present upside down", function() {
    const result = wordSearch([
      ['H', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
      ['W', 'H', 'C', 'S', 'Y', 'D', 'R', 'L'],
      ['B', 'F', 'R', 'E', 'N', 'L', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'R', 'A', 'I'],
      ['O', 'D', 'C', 'O', 'L', 'O', 'E', 'H'],
      ['E', 'Z', 'K', 'F', 'Q', 'W', 'A', 'L'],
    ], 'WORLD');

    assert.isTrue(result);
  });
  
});
