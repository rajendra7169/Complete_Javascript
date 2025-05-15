const marvel_heroes = ["thor", "ironman", "hulk", "spiderman", "black widow"];
const dc_heroes = ["superman", "flash", "batman", "wonderwoman", "green lantern"];

marvel_heroes.push(dc_heroes)

console.log(marvel_heroes); // [ 'thor', 'ironman', 'hulk', 'spiderman', 'black widow', [ 'superman', 'flash', 'batman', 'wonderwoman', 'green lantern' ] ]

marvel_heroes.concat(dc_heroes) // concat the two arrays
console.log(marvel_heroes); // [ 'thor', 'ironman', 'hulk', 'spiderman', 'black widow', [ 'superman', 'flash', 'batman', 'wonderwoman', 'green lantern' ] ]

const all_heroes = marvel_heroes.concat(dc_heroes) // concat the two arrays
console.log(all_heroes); // [ 'thor', 'ironman', 'hulk', 'spiderman', 'black widow', 'superman', 'flash', 'batman', 'wonderwoman', 'green lantern' ]

const all_heroes2 = [...marvel_heroes, ...dc_heroes] // concat the two arrays
console.log(all_heroes2); // [ 'thor', 'ironman', 'hulk', 'spiderman', 'black widow', 'superman', 'flash', 'batman', 'wonderwoman', 'green lantern' ]


const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [8, 9, 10]]];
const real_another_array = another_array.flat(6) // flatten the array
console.log(real_another_array); // [ 1, 2, 3, 4, 5, 6, 7, 6, 7, 8, 9, 10 ]

console.log(Array.isArray("Rajendra")); // false
console.log(Array.from("Rajendra")); // [ 'R', 'a', 'j', 'e', 'n', 'd', 'r', 'a' ]


let score1 = 100
let score2 = 200
let score3 = 300;

console.log(Array.of(score1, score2, score3)); // [ [ 1, 2, 3, 4, 5 ], [ 6, 7, 8, 9, 10 ], [ 11, 12, 13, 14, 15 ] ]
