const CustomError = require("../extensions/custom-error");
const EN = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

class VigenereCipheringMachine {
  isDirect = true;
  constructor(isDirect = true){
    this.isDirect = isDirect;
  }
  encrypt(message, key) {
    if (message === undefined || key === undefined) {
      throw new Error('Error');
    }

    const messageArrayInt = this.strToInt(message.split(''));
    const keyArrayInt = this.strToInt(key.split(''));
    const table = this.makeTable();

    let encryptedMessageArray = new Array();
    let keyChar = 0;

    while(encryptedMessageArray.length < messageArrayInt.length) {
      for (let i = 0; i < messageArrayInt.length; i++) {
        if (table[0].includes(messageArrayInt[i])) {
          let row = table[0].indexOf(keyArrayInt[keyChar])
          let line = table[0].indexOf(messageArrayInt[i])
          encryptedMessageArray.push(table[row][line]);
          keyChar = keyChar < keyArrayInt.length - 1 ? keyChar + 1 : 0;
        } else {
          encryptedMessageArray.push(messageArrayInt[i]);
        }
      }
    }

    return this.IntToStr(encryptedMessageArray);
  }    
  
  decrypt(encryptedMessage, key) {
    if (encryptedMessage === undefined || key === undefined) {
      throw new Error('Error');
    }

    const encryptedMessageArrayInt = this.strToInt(encryptedMessage.split(''));
    const keyArrayInt = this.strToInt(key.split(''));
    const table = this.makeTable();
    
    let decryptedMessageArray = new Array();
    let keyChar = 0;

    while(decryptedMessageArray.length < encryptedMessageArrayInt.length) {
      for (let i = 0; i < encryptedMessageArrayInt.length; i++) {
        if (table[0].includes(encryptedMessageArrayInt[i])) {
          let row = table[0].indexOf(keyArrayInt[keyChar])
          let line = table[row].indexOf(encryptedMessageArrayInt[i])
          decryptedMessageArray.push(table[0][line]);
          keyChar = keyChar < keyArrayInt.length - 1 ? keyChar + 1 : 0;
        } else {
          decryptedMessageArray.push(encryptedMessageArrayInt[i]);
        }
      }
    }
    
    return this.IntToStr(decryptedMessageArray);
  }

  makeTable() {
    const minValue = 65;
    const maxValue = 91;

    let table = new Array();
    let i = 0;

    while (i + minValue < maxValue) {
      let line = new Array();
      for (let j = 0; j < maxValue - minValue; j++) {
        line[line.length] =  j + i + minValue >= maxValue ? (j + i) - (maxValue - minValue) + minValue : j + i + minValue;
      }
      table[table.length] = line;
      i++;
    }

    return table;
  }

  strToInt(strArr) {
    return strArr.reduce((strInt, symbol) => {
      if (/[a-zA-Z]/.test(symbol)) {
        strInt.push(symbol.toUpperCase().charCodeAt(0));
      } else {
        strInt.push(symbol.charCodeAt(0));
      }
      
      return strInt;
    }, []);
  }

  IntToStr(strIntArr) {
    return strIntArr.reduce((str, num) => {
      return str = `${str}${String.fromCharCode(num)}`;
    }, '');
  }
}

module.exports = VigenereCipheringMachine;
