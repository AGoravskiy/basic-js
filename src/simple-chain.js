const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chains: [], 
  getLength() {
    return this.chains.length;
  },
  addLink(value) {
    if (value === null) {
      this.chains.push('( null )');
    } else {
      value === undefined ? this.chains.push(`(  )`) : this.chains.push(`( ${value.toString()} )`);
    }
    return this;
  },
  removeLink(position) {
    if (position < 1
      || position > this.chains.length
      || !Number.isInteger(position)) {
        this.chains = [];
        throw new Error('Wrong position');
    }

    this.chains.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.chains.reverse();
    return this;
  },
  finishChain() {
    let finishChains = this.chains.join('~~');
    this.chains = [];
    return finishChains;
  }
};

module.exports = chainMaker;
