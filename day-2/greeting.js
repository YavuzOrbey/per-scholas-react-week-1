/*
Use the strings in the arrays to form a sentence like: "Hi, my name is <Name>
Be sure to have beginning words of sentences with the proper case.

Console log the result

Use a different greeting word for each gender
Use "his" for men, "her" for women, "their" for nonbinary.

Use "my" if the isSelf argument is true


*/

/**
 @param {string} name
        name of person
 @param  {string} gender
        Possible values of "gender" argument are "male", "female", "nonbinary"
 @param {boolean} isSelf
 @returns {string}
          greeting sentence
*/

const greetingWords = ["hello","hi","hey"];

const prefixes = ["my", "his", "her", "their"];

function capitalize(text){
    return text[0].toUpperCase() + text.substr(1, greeting.length-1)
}
function greeting(name, gender, isSelf) {
    // do stuff here ...
    let greeting ="";
    let prefix ="";
    switch(gender) {
        case "male":
            greeting = greetingWords[0]
            prefix =prefixes[1];
            break;
        case "female":
            greeting = greetingWords[1]
            prefix =prefixes[2];
            break;
        default:
            greeting = greetingWords[2]
            prefix =prefixes[3];
    }
    prefix = isSelf ? prefixes[0] : prefix;
    return  `${capitalize(greeting)}, ${prefix} name is ${name}`;
}
console.log(greeting("Jim", "male", false))
console.log(greeting("John", "male", true))
console.log(greeting("Jill", "female", false))
console.log(greeting("Jake", "sadasdasdfas", true))
console.log(greeting("Judith", "fsdfsdfsdvc", false))


let obj = "dsdas";
obj = 10;
obj();
