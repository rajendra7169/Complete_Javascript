// Truthy and Falsy values in JavaScript
// Falsy values: false, 0, "", null, undefined, NaN
// Truthy values: true, 1, "0", "false", [], {}, -1, Infinity

const userEmail = function() {}

if (userEmail) {
    console.log("Got the email"); 
} else {
    console.log("No email");
}


const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}


// Nullish Coalescing Operator: ?? null, undefined
let values;

// values = 5 ?? 10
// values = null ?? 10
// values = undefined ?? 10
values = null ?? 10 ?? 20

console.log(values);


// Ternary Operator: condition ? true : false

const iceTeaPrice = 70 
iceTeaPrice >= 80 ? console.log("Ice tea is expensive") : console.log("Ice tea is cheap");


