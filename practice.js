export { capitalize, reverseString, calculator, caesarCipher, analyzeArray };

function capitalize(str) {
  return str[0].toUpperCase() + str.slice(1);
}

function reverseString(str) {
  return str.split('').reverse().join('');
}

function calculator() {
  this.add = function (a, b) {
    return a + b;
  };

  this.subtract = function (a, b) {
    return a - b;
  };

  this.divide = function (a, b) {
    return a / b;
  };

  this.multiply = function (a, b) {
    return a * b;
  };
}

function caesarCipher(str, mod) {
  return str
    .split('')
    .map((char) => shiftCharacter(char, mod))
    .join('');
}

// helper function for caesarCipher
function shiftCharacter(char, mod) {
  let code = char.charCodeAt();
  const punctuations = `.,?!'"-_ `;
  if (!punctuations.includes(char)) {
    code += mod;
    if (char === char.toUpperCase() && code > 90) {
      const temp = code - 90;
      code = temp + 64;
    }
    if (char === char.toLowerCase() && code > 122) {
      const temp = code - 122;
      code = temp + 96;
    }
  }
  return String.fromCharCode(code);
}

function analyzeArray(arr) {
  return {
    average: arr.reduce((sum, item) => sum + item) / arr.length,
    min: Math.min(...arr),
    max: Math.max(...arr),
    length: arr.length,
  };
}
