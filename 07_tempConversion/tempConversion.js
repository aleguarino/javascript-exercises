const convertToCelsius = F => parseFloat((5 / 9 * (F - 32)).toFixed(1));


const convertToFahrenheit = C => parseFloat((C * 1.8 + 32).toFixed(1));


// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
