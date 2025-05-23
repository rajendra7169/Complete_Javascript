const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const newNumbers = myNumbers.map ( ( num) => num +10)
console.log(newNumbers);


// // using forEach 

// const coding = ["ruby", "python", "Java"] 
// const newCoding = coding.forEach ( (items) => {
//     return items
// })

// console.log(newCoding);




//*****************************************************chainning********************************************************* */
const newNumbers1 = myNumbers
                    .map( (num) => num *10)
                    .map((num) => num +1)
                    .filter( (num) => num >= 40)

console.log(newNumbers1);

 



