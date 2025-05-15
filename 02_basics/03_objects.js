// singletan 

// object literal

const person = {
    name: 'John',
    age: 25,
    location: 'Kathmandu',
    email: 'raja@gmail.com',
    isLoggedIn: false,
    lastLogin: '2023-10-01',

}

console.log(person.email)
console.log(person['email'])

const mySymbol = Symbol('mySymbol')

person.email = "rajendra@gmail.com"
// Object.freeze(person) // freeze the object
person.email = "rajaindra@gmail.com" // this will not change the email
console.log(person.email) // still "


person.greeting = function() { 
    console.log('Hello, ' + this.name);
}

person.greeting2 = function() { 
    console.log('Hello Raja');
}   

console.log(person.greeting()) // Hello, John
console.log(person.greeting2()) // Hello Raja

