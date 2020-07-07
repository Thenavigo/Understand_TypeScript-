"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Using Classes To Create Objects - Creating Classes and Class Properties
var Person = /** @class */ (function () {
    function Person(name, username) {
        this.username = username;
        this.name = name;
    }
    return Person;
}());
var person = new Person("Max", "max");
console.log(person.name, person.username);
// Using Classes To Create Objects - Class Methods And Access Modifiers
var Person = /** @class */ (function () {
    function Person(name, username) {
        this.username = username;
        this.age = 27;
        this.name = name;
    }
    Person.prototype.printAge = function () {
        console.log(this.age);
        this.setType("Old Guy");
    };
    Person.prototype.setType = function (type) {
        this.type = type;
        console.log(this.type);
    };
    return Person;
}());
var person = new Person("Max", "max");
console.log(person.name, person.username);
person.printAge();
// person.setType("Cool guy"); Won't work with private method
// Using Classes To Create Objects - Inheritance
var Max = /** @class */ (function (_super) {
    __extends(Max, _super);
    function Max() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "Max";
        return _this;
    }
    return Max;
}(person));
var max = new Max("Anna", "max");
console.log(max);
// Using Classes To Create Objects - Inheritance And Constructors
var Max = /** @class */ (function (_super) {
    __extends(Max, _super);
    // name = "Max";
    function Max(username) {
        return _super.call(this, "Max", username) || this;
    }
    return Max;
}(person));
var max = new Max(max, ");, console.log(max));
