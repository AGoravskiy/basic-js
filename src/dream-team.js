const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (Array.isArray(members)){
    return members.reduce((dreamTeam, member) => {
      if (typeof member === 'string') {
        dreamTeam += member.trim()[0].toUpperCase();
      }
      return dreamTeam;
    }, '').split('').sort().join(''); 
  }
  return false;
};
