const programmingLanguage = {
    CPP: "C++",
    JS: "JavaScript",
    rb: "Ruby",
    swift: "Swift by Apple"
}

for (const key in programmingLanguage){
   console.log(`Shortcut of ${programmingLanguage[key]} is ${key}`)
}