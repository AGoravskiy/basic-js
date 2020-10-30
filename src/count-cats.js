const CustomError = require("../extensions/custom-error");

const CAT = '^^';

module.exports = function countCats(matrix) {
  return matrix.reduce((catCount, arr) => catCount + arr.reduce((count, item) => {
    if (item === CAT) {
      count++;
    }
    return count;
  }, 0), 0);
};
