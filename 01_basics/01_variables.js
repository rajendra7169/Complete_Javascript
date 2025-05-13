const accountId = 1234567890 
let accountEmail = "raja@gmail.com" 
var accountPassword = "12345"
accountCity = "Kathmandu" //this is a global variable and not recommended
let accountState; // this is a variable that is declared but not initialized
// accountId = 76387628 // not allowed 

console.log(accountId);

/*
prefer not to use var because it is function scoped
use let or const
*/ 

accountEmail = "rajaindra@gmail.com" // allowed
accountPassword = "1234567890" // allowed
accountCity = "Lalitpur" // allowed 

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])