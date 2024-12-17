function greet(name) {
    return "hello ".concat(name);
}
// void functions
function sauHi() {
    console.log("hi");
}
// optional parameters
function logX(x) {
    if (x)
        return x;
    return 0;
}
// default parameters
function logY(y) {
    if (y === void 0) { y = 0; }
    console.log(y);
}
// complex type
function getUSerInfo(name, age) {
    return { name: name, age: age };
}
// rest Parameters
function sumNumbers() {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    return numbers.reduce(function (total, current) { return total + current; }, 0);
}
// pass function as variable
var multiply;
multiply = function (a, b) {
    return a * b;
};
