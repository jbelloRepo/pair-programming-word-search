const transpose = require("./transpose");

const wordSearch = (letters, word) => {
  // check if the array is empty => return false

  if (letters.length === 0) {
    return false;
  }

  const horizontalJoin = letters.map((ls) => ls.join(""));
  for (const l of horizontalJoin) {
    if (l.includes(word)) return true;
  }

  // call transpose
  let transposedLetters = transpose(letters);
  const verticalJoin = transposedLetters.map((ls) => ls.join(""));
  const verticalJoinUpsideDown = transposedLetters.map((ls) =>
    ls.reverse().join("")
  );
  for (const l of verticalJoin) {
    if (l.includes(word)) return true;
  }
  for (const l of verticalJoinUpsideDown) {
    if (l.includes(word)) return true;
  }

  return false;
};

module.exports = wordSearch;
