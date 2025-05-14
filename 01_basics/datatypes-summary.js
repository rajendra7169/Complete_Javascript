// primitive data types
// let name = "John"; // string
// let age = 30; // number
// let isStudent = true; // boolean
// let height = 5.9; // number
// let isEmployed = false; // boolean
// let address = null; // null
// let undefinedValue; // undefined
// let bigIntValue = 1234567890123456789012345678901234567890n; // BigInt
// let symbolValue = Symbol("unique"); // Symbol

const id = Symbol("1234");
const id2 = Symbol("1234");

console.log(id === id2); // false

// Non Primitive Data Types (Array, Object, Function)

const heros = ["Thor", "Ironman", "Hulk"];

let myObj = {
  name: "Raja",
  age: 30,
  isLoggedIn: true,
  friends: ["Thor", "Ironman", "Hulk"],
  address: {
    street: "MG Road",
    city: "Bangalore",
    state: "Karnataka",
  },
};

const myFunction = function () {
    console.log("Hello World");
    
}

console.log(typeof myFunction); // function
console.log(typeof myObj); // object
console.log(typeof heros); // object
console.log(typeof id); // symbol
