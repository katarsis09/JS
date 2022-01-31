let first = 13.890123;
let second = 2.891564;
let precision = 3; 

let firstNormalized = Math.floor(first % 1 * Math.pow(10, precision));
let secondNormalized = Math.floor(second % 1 * Math.pow(10, precision));

console.log(firstNormalized);
console.log(secondNormalized);