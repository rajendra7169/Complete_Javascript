/*
let score = "33"

console.log(typeof score) // number;
console.log(typeof (score)) // number;


let valueInNumber = Number(score) // convert string to number
console.log(typeof valueInNumber) // number;
*/


let score = "33abc"

// console.log(typeof score) // number;
// console.log(typeof (score)) // number;


let valueInNumber = Number(score) // convert string to number
// console.log(typeof valueInNumber) 

// console.log(valueInNumber);


// "33" => 33
// "33abc" => NaN
// true => 1
// false => 0
// null => 0
// undefined => NaN
// " " => 0

let isLoggedIn = "Raja" // true

let booleanIsLoggedIn = Boolean(isLoggedIn) // convert number to boolean
// console.log(booleanIsLoggedIn) // true
// console.log(typeof booleanIsLoggedIn) // boolean

// 1 => true
// 0 => false
// "Raja" => true
// " " => false


let someNumber = 33
let stringNumber = String(someNumber) // convert number to string
// console.log(stringNumber) // "33"
// console.log(typeof stringNumber) // string



// ******************************************** Operator Precedence ********************************************

let value = 3
let negValue = -value // -3
//console.log(negValue) // -3

/*
console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2/2);
console.log(2**2); // 2^2 = 4
console.log(2%2); // 0
console.log(2**3); // 8

*/

// console.log("1" + 2) // "12"
// console.log(1 + "2") // "12"
// console.log(1 + 2 + "3") // "33"
// console.log("1" + 2 + 3) // "123"
// console.log(1 + 2 + 3 + "4") // "64"
// console.log(1 + 2 + "3" + 4) // "334"


// console.log(+true);
// console.log(+false);
// console.log(+"") // not recommended


let num1, num2, num3
num1 = num2 = num3 = 2+2 // not recommended

let gameCounter = 100
gameCounter++; // postfix increment = 101
++gameCounter; // prefix increment = 102
console.log(gameCounter) // 102


let gameCounter1 = 100;
let x = gameCounter1++; // x = 100, gameCounter is incremented to 101
console.log(x); // 100
console.log(gameCounter1); // 101


let gameCounter2 = 100;
let y = ++gameCounter2; // gameCounter is incremented to 101, and then assigned to y
console.log(y); // 101
console.log(gameCounter2); // 101

