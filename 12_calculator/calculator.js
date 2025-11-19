const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
  return array.reduce((total, num) => total += num, 0);
};

const multiply = function(array) {
  return array.reduce((total, num) => total *= num, 1);
};

const power = function(base, exponent) {
  let result = 1;
  for (let i = 1; i <= exponent; i++) {
    result *= base;
  };
  return result;
};

const factorial = function(number) {
  switch (number) {
    case 0:
    case 1:
      return 1;
    default:
      let result = 1
      for (let i = 2; i <= number; i++) {
        result *= i;
      };
      return result;
}
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
