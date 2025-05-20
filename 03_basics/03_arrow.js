const user = {
    username: "Raja",
    price: 999,

    welcomeMessage: function() {
        console.log(`welcome ${this.username} to the course of ${this.price}`);
        console.log(this);
        
    }
}

user.welcomeMessage()
user.username = "Ravi"
user.welcomeMessage()

console.log(this);


function testThis() {
    console.log(this);
}   

testThis() // window object

function testThis2() {
    let username = "Raja"
    console.log(this.username);
}

testThis2() // undefined

const testArrow = () => {
    let username = "Raja"
    console.log(this.username);
}

testArrow() // undefined


const addTwo = (num1, num2) => {
    return num1 + num2
}

console.log(addTwo(5, 10))

const addThree = (num1, num2, num3) => num1 + num2 + num3
console.log(addThree(5, 10, 15)) // 30
// if you have only one parameter, you can skip the parenthesis

const addFour = (num1, num2, num3, num4) => (num1 + num2 + num3 + num4)
console.log(addFour(5, 10, 15, 20)) // 50

const addFive = (num1, num2, num3, num4, num5) => ({username: "Raja"})
console.log(addFive(5, 10, 15, 20, 25)) // 75


const myArray = [1, 2, 3, 4, 5]

