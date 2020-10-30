const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {

  if (str === null) {
    str = 'null';
  }

  let repeatedStr = str.toString();

  if (options.addition !== undefined) {
    if (options.addition === null) {
      options.addition = 'null';
    }

    repeatedStr = options.additionRepeatTimes === undefined 
    ? `${str.toString()}${options.addition.toString()}` 
    : `${str.toString()}`;
  }

  options.separator = options.separator === undefined ? '+' : options.separator;
  

  for (let i = 1; i <= options.repeatTimes; i++) {
    for (let j = 1; j <= options.additionRepeatTimes; j++) {
      repeatedStr = j === options.additionRepeatTimes 
        ? `${repeatedStr}${options.addition.toString()}` 
        : `${repeatedStr}${options.addition.toString()}${options.additionSeparator}`;
    }
    repeatedStr = i === options.repeatTimes 
        ? `${repeatedStr}`
        : `${repeatedStr}${options.separator}${str.toString()}`;
  }

  return repeatedStr;
};
  