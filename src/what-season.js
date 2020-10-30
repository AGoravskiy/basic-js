const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  
  if (typeof(date) === 'undefined') {
    return 'Unable to determine the time of year!';
  }
  try {
    date.getUTCDay();
  } catch (error) {
    throw new Error('Error');
  }
  if (!(date instanceof Date)) {
    throw new Error('Error');
  }

  const winterIntArr = [11, 0, 1];
  const springIntArr = [2, 3, 4];
  const summerIntArr = [5, 6, 7];

  if (winterIntArr.includes(date.getMonth())) {
    return 'winter';
  } else if (springIntArr.includes(date.getMonth())) {
    return 'spring';
  } else if (summerIntArr.includes(date.getMonth())) {
    return 'summer'
  } else {
    return 'autumn';
  }
};
