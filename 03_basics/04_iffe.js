// (IIIFE) Immediately Invoked Function Expression. An IIFE is a function that runs as soon as it is defined. It is a common JavaScript design pattern that helps to create a new scope and avoid polluting the global scope. It is also used to create private variables and methods.

(function greet() {
    // named iffe
    console.log("DB Connected");
}) (); // semicolon is needed if you are using another iife immediately after this iife

( (name) => {
    console.log(`DB Connected to ${name}`);
}) ("Firebase"); 

