const transpose = function(matrix) {
  const numRows = matrix.length;
  const numColumns = matrix[0].length;
  const transposedMatrix = [];

  // nested for loop
  for (let col = 0; col < numColumns; col++) {
    transposedMatrix[col] = [];
    for (let row = 0; row < numRows; row++) {
      // [col][row] = [row][col]
      transposedMatrix[col][row] = matrix[row][col];
    }
  }

  return transposedMatrix;
};


module.exports = transpose;