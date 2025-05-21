const programmingLanguage = {
    CPP: "C++",
    JS: "JavaScript",
    rb: "Ruby",
    swift: "Swift by Apple"
}

for (const key in programmingLanguage){
   console.log(`Shortcut of ${programmingLanguage[key]} is ${key}`)
}


const programming = ["js", "c++", "ruby", "swift"]

for (const key in programming) {
    // console.log(key);
    console.log(programming[key]);
    
    
}


const map = new Map()
map.set("NP", "Nepal")
map.set("IN", "India")
map.set("Fr", "France")
map.set("NP", "Nepal")

for (const key in map) {
    console.log(map[key]);
    
} // can not do this because we can not do forin loop in map