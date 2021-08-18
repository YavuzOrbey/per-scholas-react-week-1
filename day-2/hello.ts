function doSomething(name) {
    let x = 10+1 < 2 ? 20: false;
    return x;
}
console.log(doSomething(true));


function doSomethingElse(name) {
    name = 10 > 1 ? true: 11;
    return name;
}

console.log("In main method: ");
console.log(this);

function nonArrowFunction(){
    console.log("In Non Arrow Function: ");
    console.log(this);
}

const arrowFunction = () =>{
    console.log("In Arrow Function: ");
    console.log(this)
}

nonArrowFunction()
arrowFunction()