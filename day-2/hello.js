var _this = this;
function doSomething(name) {
    var x = 10 + 1 < 2 ? 20 : false;
    return x;
}
console.log(doSomething(true));
function doSomethingElse(name) {
    name = 10 > 1 ? true : 11;
    return name;
}
console.log("In main method: ");
console.log(this);
function nonArrowFunction() {
    console.log("In Non Arrow Function: ");
    console.log(this);
}
var arrowFunction = function () {
    console.log("In Arrow Function: ");
    console.log(_this);
};
nonArrowFunction();
arrowFunction();
