const add = (a, b) => a + b;

const subtract = (a, b) => a - b;

const sum = values => {
  let total = 0;
  values.forEach(element => {
    total += element;
  });
  return total;
};

const multiply = values => {
  let total = 1;
  values.forEach(element => {
    total *= element;
  });
  return total;
};

const power = (a, b) => Math.pow(a, b);

const factorial = a => {
  if (a <= 1) return 1;
  return a * factorial(a - 1);
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
