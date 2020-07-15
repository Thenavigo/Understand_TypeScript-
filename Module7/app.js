"use strict";
// - The Basics About Interfaces.
function greet(person) {
    console.log("Hello, " + person.firstName);
}
function changeName(person) {
    person.firstName = "Kraken";
}
//const person = {
//	firstName: "Patrick",
//	age: 27
//};
var person = {
    firstName: "Patrick",
    hobbies: ["Cooking", "Sports"],
    greet: function (lastName) {
        console.log("Hi, I am " + this.firstName + " " + lastName);
    }
};
// greet(person);
// greet({firstName: "Patrick", age: 27});
changeName(person);
greet(person);
person.greet("Anything");
// - Interfaces And Properties
// greet({name: "Patrick", age: 27});
// run tsc you see err
// Object literal  may only specify know properties, and 'age' does not exist in type 'NamePerson.'
// to solve this problem we just have to define our property as "optional." Like this:
// age?: number;
// run tsc
// - Using Interfaces With Classes
var Person = /** @class */ (function () {
    function Person() {
    }
    Person.prototype.greet = function (lastName) {
        console.log("Hi, I am " + this.firstName + " " + lastName);
    };
    ;
    return Person;
}());
var myPerson = new Person();
myPerson.firstName = "Patrick";
myPerson.lastName = "Anything";
greet(myPerson);
myPerson.greet(myPerson.lastName);
var myDoubleFunction = function (value1, value2) {
    return (value1 + value2) * 2;
};
console.log(myDoubleFunction(10, 20));
var oldPerson = {
    age: 27,
    firstName: "Pat",
    greet: function (lastName) {
        console.log("Hello");
    }
};
console.log(oldPerson);
