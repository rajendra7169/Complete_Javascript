const score = 400 
console.log(score); // 400

const balance = new Number("1000");
console.log(balance) // Number { '1000' }


console.log(balance.toString().length); // 4
console.log(balance.toFixed(2)); // 1000.00


const otherNumber = 123.978378

console.log(otherNumber.toPrecision(5)); // 123.98


const hundreds = 1000000
console.log(hundreds.toLocaleString("en-NP")); // 10,00,000



//*********************************************************maths library********************************************

// Math library
// Math is a built-in object in JavaScript that provides mathematical constants and functions.
console.log(Math); 
console.log(Math.abs(-4)); // 4
console.log(Math.abs(-4.5)); // 4.5
console.log(Math.round(4.5)); // 5
console.log(Math.round(4.4)); // 4

console.log(Math.ceil(4.4)); // 5
console.log(Math.floor(4.4)); // 4
console.log(Math.sqrt(16)); // 4
console.log(Math.pow(2, 3)); // 8
console.log(Math.max(1, 2, 3, 4, 5)); // 5
console.log(Math.min(1, 2, 3, 4, 5)); // 1

console.log(Math.random()); // random number between 0 and 1
console.log(Math.random() * 10); // random number between 0 and 10
console.log((Math.random() * 10) + 1); // random number between 1 and 10
console.log(Math.floor(Math.random() * 10) + 1); // random number between 1 and 10


const min = 10
const max = 20


console.log(Math.floor(Math.random() * (max - min +1)) + min); // random number between 10 and 20


