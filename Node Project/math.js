const add = (a, b) => a + b;
const sub = (a, b) => a - b;
const mul = (a, b) => a * b;
const div = (a, b) => a / b;

console.log(add(2, 3));
console.log(sub(3, 2));
console.log(mul(2, 3));
console.log(div(2, 3));

module.exports = { add, sub, mul, div };
