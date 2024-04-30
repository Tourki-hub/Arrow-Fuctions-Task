const greet = (name) => {
  return `Hello, ${name}!`;
};

console.log(greet("Tourki"));

const sum = (num1, num2) => {
  return num1 + num2;
};

console.log(sum(3, 4));

const squared = (num) => {
  return num ** 2;
};

console.log(squared(4));

const sqrNumber = (numbers) => numbers.map((Number) => Number * Number);

let x = [1, 2, 3, 4, 5];

console.log(sqrNumber(x));
