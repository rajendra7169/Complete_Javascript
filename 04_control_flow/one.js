// If statement

// <, >, <=, >=, ==, ===, !=, !==, &&, ||, !

const isUserloggedIn = true
if (2 != 3) {
    console.log("User is logged in");
    
}

const temp = 50
if (temp < 30) {
    console.log("It is cold outside");
} else {
    console.log("temperature is greater then 30");
}


const score = 200

if (score > 100) {
    const power = "fly"
    console.log(`User has power of ${power}`);
    
}

let balance = 1000
if (balance > 500) console.log(("test"));


if (balance < 500) {
    console.log("Less than");
} else if (balance = 500) {
    console.log("Equal to");
} else {
    console.log("Greater than");
} 



const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard) {
    console.log("Allow to buy course");
}

if (loggedInFromEmail || loggedInFromGoogle ){
    console.log("User is logged in from email or google");
    
}



  