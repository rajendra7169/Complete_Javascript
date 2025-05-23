const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
    
//     return acc + currval
// }, 0)



const myTotal = myNums.reduce ( (acc, curr) => acc+curr, 0)

console.log(myTotal);



const shoppingCart = [
    {
        iteamName: "js course",
        price: 2999
    },
    {
        iteamName: "py course",
        price: 3000
    },
    {
        iteamName: "flutter course",
        price: 6000
    },
    {
        iteamName: "java course",
        price: 5000
    },
]


const priceToPay = shoppingCart.reduce( (acc, items) => acc + items.price, 0)

console.log(priceToPay);
