const programmingLanguage = ["js", "ruby", "java", "python", "cpp"]

programmingLanguage.forEach ( function (coding){
    console.log(coding);
    
})


programmingLanguage.forEach( (items) => {
    console.log(items);
        
});
// we can write it in both way


// another way

function printMe(items) {
    console.log(items);
    
}


programmingLanguage.forEach( (items, index, array) => {
    console.log(items, index, array);
    
})



myProgrammingLanguage = [
    {
        languageName: "C++",
        fileName: "CPP"
    },
    {
        languageName: "Python++",
        fileName: "py"
    },
    {
        languageName: "JavaScript",
        fileName: "Js"
    }
]

myProgrammingLanguage.forEach ( (iteam) =>{
    console.log(iteam.languageName);
    
})





