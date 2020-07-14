"use strict";
// - The Basics About Interfaces.
function greet(person) {
    console.log("Hello, " + person.name);
}
function changeName(person) {
    person.name = "Kraken";
}
//const person = {
//	name: "Patrick",
//	age: 27
//};
var person = {
    name: "Patrick",
    hobbies: ["Cooking", "Sports"],
    greet: function (lastName) {
        console.log("Hi, I am " + this.name + " " + lastName);
    }
};
// greet(person);
// greet({name: "Patrick", age: 27});
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
// - Interfaces And Methods
// we will manipulate the greet() method let's look at the readme.
// - Using Interfaces With Classes 
var Person = /** @class */ (function () {
    function Person() {
    }
    Person.prototype.greet = function (lastName) {
        console.log("Hi, I am " + this.name + " " + lastName);
    };
    ;
    return Person;
}());
var myPerson = new Person();
myPerson.name = "bestCode";
greet(myPerson);
myPerson.greet("Anything");
