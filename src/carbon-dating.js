const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (typeof(sampleActivity) !== 'string' || 
    isNaN(parseFloat(sampleActivity)) || 
    parseFloat(sampleActivity) <= 0 ||
    parseFloat(sampleActivity) > 15) return false;
  return Math.log(MODERN_ACTIVITY / sampleActivity) * HALF_LIFE_PERIOD / 0.693;
};
