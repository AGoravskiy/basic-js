const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let haniiResult = {};
  haniiResult.turns = Math.pow(2, disksNumber) - 1;
  haniiResult.seconds = Math.floor(haniiResult.turns / (turnsSpeed / 3600));
  return haniiResult;
};
