"use strict";
// - Simple Generic
function echo(data) {
    return data;
}
console.log(echo("Max"));
console.log(echo(27));
console.log(echo({ name: "Pat", age: 27 }));
// - Creating A Generic Function: Better Generic
function betterEcho(data) {
    return data;
}
console.log(betterEcho("Max").length);
console.log(betterEcho(27));
console.log(betterEcho({ name: "Pat", age: 27 }));
// - Built-In Generic Type: Arrays
var testResults = [1.94, 2.33];
testResults.push(-2.99);
console.log(testResults);
// - Generic Types And Arrays
function printAll(args) {
    args.forEach(function (element) { return console.log(element); });
}
printAll(["Tomato", "Banana"]);
// - Using Generic Types
var echo2 = betterEcho;
console.log(echo2("Something"));
// - Creating A Generic Class
var SimpleMath = /** @class */ (function () {
    function SimpleMath() {
    }
    SimpleMath.prototype.calculate = function () {
        return +this.baseValue * +this.multiplyValue;
    };
    return SimpleMath;
}());
var simpleMath = new SimpleMath();
simpleMath.baseValue = 10;
simpleMath.multiplyValue = 20;
console.log(simpleMath.calculate());
