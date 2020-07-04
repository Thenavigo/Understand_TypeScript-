"use strict";
// let & const
var variable = "Test";
console.log(variable);
variable = "Another value";
console.log(variable);
//tsc -w
var maxLevels = 100;
console.log(maxLevels);
// maxLevels = 99; Won't work
// Block scope -> it is the access to our local and global variables manipulated here.
function reset() {
    //console.log(variable);
    var variable = null;
    console.log(variable);
}
reset();
console.log(variable);
// Arrow Functions
console.log("ARROW FUNCTIONS");
var addNumbers = function (number1, number2) {
    return number1 + number2;
};
console.log(addNumbers(10, 3));
var multiplyNumbers = function (number1, number2) { return number1 * number2; };
console.log(multiplyNumbers(10, 3));
// Arrow Functions - Variations
var greet = function () {
    console.log("Hello");
};
greet();
var greetFriend = function (friend) { return console.log(friend); };
greetFriend("Patrick");
// TypeScript And ES6 - Functions And Default Parameters
console.log("Default Parameters");
var countdown = function (start) {
    if (start === void 0) { start = 10; }
    console.log(start);
    while (start > 0) {
        start--;
    }
    console.log("Done!", start);
};
countdown();
// TypeScript And ES6 - The Spread Operator
console.log("REST & SPREAD");
var numbers = [1, 10, 99, -5];
console.log(Math.max(33, 99, 10, -3));
console.log(Math.max.apply(Math, numbers));
// TypeScript And ES6 - The Rest Operator
console.log("REST & SPREAD");
function makeArray() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return args;
}
console.log(makeArray(1, 2, 6));
// TypeScript And ES6 - Destructuring Arrays
console.log("DESTRUCTURING");
var myHobbies = ["Cooking", "Sports"];
var hobby1 = myHobbies[0], hobby2 = myHobbies[1];
console.log(hobby1, hobby2);
// TypeScript And ES6 - Template Literals
var userName = "Patrick";
var greeting = "This is a heading!\nI'm " + userName + ".\nThis is cool!";
console.log(greeting);
// TypeScript And ES6 - Other ES6 Features.
[subscribe, to, our, newsletter](https); //thenavigo.substack.com/p/coming-soon)
// TypeScript And ES6 - Module Exercise: Solution
