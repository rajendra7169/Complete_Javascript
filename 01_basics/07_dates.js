// Dates in JavaScript
// Dates in JavaScript are represented by the Date object.
// The Date object is used to work with dates and times.
// The Date object is created using the new Date() constructor.

// The Date object can be created using the following methods:

let date = new Date(); // current date and time
console.log(date); // current date and time
console.log(date.toString()); // current date and time in string format
console.log(date.toDateString()); // current date in string format
console.log(date.toTimeString()); // current time in string format
console.log(date.toLocaleDateString()); // current date in local format
console.log(date.toLocaleTimeString()); // current time in local format

console.log(typeof date); // object

let date1 = new Date("2023-10-01"); // date in string format
console.log(date1); // date in string format
console.log(date1.toString()); // date in string format
console.log(date1.toDateString()); // date in string format
console.log(date1.toTimeString()); // date in string format
console.log(date1.toLocaleDateString()); // date in string format
console.log(date1.toLocaleTimeString()); // date in string format
console.log(date1.getTime()); // date in milliseconds

let newDate = new Date()
console.log(newDate);
console.log(newDate.getFullYear()); // current year
console.log(newDate.getMonth() + 1); 
console.log(newDate.getDay()); // current day of the week (0-6)
console.log(newDate.getDate()); // current date of the month (1-31)


newDate.toLocaleDateString('difault', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
}) // current date in local format

