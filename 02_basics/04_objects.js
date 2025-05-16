// const tinderUser = new Object();
const tinderUser = {}

tinderUser.id = 123
tinderUser.name = 'John'
tinderUser.isLoggedIn = false

console.log(tinderUser) // { id: 123, name: 'John', isLoggedIn: false ;


const regularUser = {
    email: "raja@gmail.com",
    fullName: {
        firstName: "Rajendra",
        lastName: "Pandey"
    }
}

console.log(regularUser);

console.log(regularUser.fullName); // { firstName: 'Rajendra', lastName: 'Pandey' }
console.log(regularUser.fullName.firstName); // Rajendra


const obj1 = {1: 'a', 2: 'b', 3: 'c'}
const obj2 = {4: 'a', 5: 'b', 6: 'c'}

// const obj3 = {obj1, obj2}
const obj3 = Object.assign({}, obj1, obj2)
console.log(obj3); // { obj1: { '1': 'a', '2': 'b', '3': 'c' }, obj2: { '4': 'a', '5': 'b', '6': 'c' } }

const obj4 = {...obj1, ...obj2}
console.log(obj4); // { '1': 'a', '2': 'b', '3': 'c', '4': 'a', '5': 'b', '6': 'c' }


const myDetails = [
    { name: 'Rajendra', age: 25, location: 'Kathmandu' },
    { name: 'John', age: 30, location: 'New York' },
    { name: 'Jane', age: 28, location: 'London' }
]

console.log(myDetails[0]); // { name: 'Rajendra', age: 25, location: 'Kathmandu' }
console.log(myDetails[1].name); // John

console.log(Object.keys(tinderUser)); // [ 'id', 'name', 'isLoggedIn' ]
console.log(Object.values(tinderUser)); // [ 123, 'John', false ]
console.log(Object.entries(tinderUser)); // [ [ 'id', 123 ], [ 'name', 'John' ], [ 'isLoggedIn', false ] ]

console.log(tinderUser.hasOwnProperty('id')); // true


const course = {
    courseNaame: 'JavaScript',
    price: 199,
    courseInstructor: 'John Doe',
    courseDuration: '3 months',
    courseDescription: 'Learn JavaScript from scratch',
}

// console.log(course.courseInstructor);

const {courseInstructor: instructor} = course
console.log(courseInstructor); // John Doe
console.log(instructor); // John Doe


// ********************************************** API ***********************************************
// API (Application Programming Interface) is a set of rules and protocols for building and interacting with software applications. It allows different software systems to communicate with each other, enabling developers to access and use the functionality of other applications or services. APIs can be used to retrieve data, perform actions, or integrate different systems together. They are commonly used in web development, mobile app development, and cloud computing.

// {
//     "name": "Raja"
//     "course": "JavaScript",
//     "duration": "3 months",
//     "price": 199,
//     "instructor": "John Doe",
//     "description": "Learn JavaScript from scratch",
// }


 [
    {},
    {},
    {}
 ]

