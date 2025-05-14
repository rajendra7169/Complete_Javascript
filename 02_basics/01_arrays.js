// Arrays in JavaScript
// // Arrays are used to store multiple values in a single variable.
// // An array is a special variable, which can hold more than one value at a time.
// // An array is an object that has a length property and can be accessed using an index.

const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(myArray[0]); // 1

const myHeros = ["Thor", "Ironman", "Hulk"];
 const myHeros2 = new Array("Thor", "Ironman", "Hulk");
console.log(myHeros); // [ 'Thor', 'Ironman', 'Hulk' ]
console.log(myHeros2); // [ 'Thor', 'Ironman', 'Hulk' ]

// Array Methods
// // Array methods are used to manipulate arrays.

myArray.push(11); // add an element to the end of the array
console.log(myArray); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11 ]
myArray.pop(); // remove the last element of the array
console.log(myArray); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
myArray.unshift(0); // add an element to the beginning of the array
console.log(myArray); // [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
myArray.shift(); // remove the first element of the array
console.log(myArray); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]


myArray.splice(2, 2); // remove 2 elements from index 2
console.log(myArray); // [ 1, 2, 5, 6, 7, 8, 9, 10 ]
myArray.splice(2, 0, 3, 4); // add 2 elements at index 2
console.log(myArray); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]

console.log(myArray.indexOf(5)); // 4  
