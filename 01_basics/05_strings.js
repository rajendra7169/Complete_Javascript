const name = "Raja"; // string
const repoCount = 10; // number

console.log(name + repoCount + " repositories"); // Raja10 repositories

console.log(`Hello my name is ${name} and i have ${repoCount} repositories`); // Hello my name is Raja and i have 10 repositories


const gameName = new String("GTA V"); // string

console.log(gameName[0]);
console.log(gameName.__proto__); // String {}

console.log(gameName.length); // 5
console.log(gameName.toUpperCase()); // GTA V
console.log(gameName.charAt(0)); // G
console.log(gameName.indexOf("V")); // 4
console.log(gameName.lastIndexOf("V")); // 4
console.log(gameName.slice(0, 3)); // GTA
console.log(gameName.substring(0, 3)); // GTA
console.log(gameName.split(" ")); // [ 'GTA', 'V' ]
console.log(gameName.replace("V", "5")); // GTA 5
console.log(gameName.includes("G")); // true
console.log(gameName.startsWith("G")); // true
console.log(gameName.endsWith("V")); // true
console.log(gameName.trim()); // GTA V
console.log(gameName.trimStart()); // GTA V
console.log(gameName.trimEnd()); // GTA V
console.log(gameName.valueOf()); // GTA V
console.log(gameName.concat(" is a great game")); // GTA V is a great game

console.log(gameName.slice(0, 3)); // GTA
console.log(gameName.substring(-2, 2)); // GT


const newString = "     Hello World    ";
console.log(newString) //      Hello World
console.log(newString.trim()); // Hello World


const url = "https://www.google.com/search?q=%javascript";
console.log(url.replace("%javascript", "javascript")); // https://www.google.com/search?q=javascript

console.log(url.includes("google")); // true
console.log(url.startsWith("raja")); // false

