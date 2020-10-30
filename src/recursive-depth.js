const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  constructor() {
    this.calculateDepth = this.calculateDepth.bind(this);
  }
  
  calculateDepth(arr, subDepth = 1) {
    let depth = subDepth;
    for(let i = 0; i < arr.length; ++i) {
        if (Array.isArray(arr[i])) {
          depth = Math.max(this.calculateDepth(arr[i], subDepth + 1), depth);
      }
    }
    return depth;
  }
};