const convertToCelsius = function(tempF) {
  let tempC = 5/9 * (tempF - 32);
  return Number(tempC.toFixed(1));
};

const convertToFahrenheit = function(tempC) {
  let tempF = 9/5 * tempC + 32;
  return Number(tempF.toFixed(1));
};
console.log(convertToCelsius(32));
// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
