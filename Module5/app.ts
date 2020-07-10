// Creating Classes and Class Properties
class Person {
	name: string;
	private type: string;
	protected age: number;

	constructor(name: string, public username: string) {
		this.name = name;
	}
}

const person = new Person("Max", "max");
console.log(person.name, person.username);

// Class Methods And Access Modifiers
class Person {
	name: string;
	private type: string;
	protected age: number = 27;

	constructor(name: string, public username: string) {
		this.name = name;
	}

	printAge() {
		console.log(this.age);
		this.setType("Old Guy");
	}

	private setType(type: string) {
		this.type = type;
		console.log(this.type);
	}
}

const person = new Person("Max", "max");
console.log(person.name, person.username);
person.printAge();
// person.setType("Cool guy"); Won't work with private method



// Inheritance
class Max extends Person {
	name = "Max";
}
const max = new Max("Anna", "max");
console.log(max);

// Inheritance And Constructors
class Max extends Person {
	// name = "Max";

	constructor(username: string) {
		super("Max", username);
	}
}
const max = new Max("max");
console.log(max);


// Inheritance Wrap Up
class Max extends Person {
	// name = "Max";

	constructor(username: string) {
		super("Max", username);
		this.age = 31;
	}
}
const max = new Max("max");
console.log(max);


// Getters & Setters
class Plant {
	private _species: string = "Default";

	get species() {
		return this._species;
	}

	set species(value: string) 
	{
		if (value.length > 3) {
			this._species = value;
		} else {
			this._species = "Default";
		}
	}
}

let plant = new Plant();
console.log(plant.species);
// You see "Default"
plant.species = "AB";
console.log(plant.species);
// You see "Default" because (value.length < 3)
plant.species = "Green Plant";
console.log(plant.species);

// Static Properties & Methods
class Helpers {
	static PI: number = 3.14;
	static calcCircumference(diameter: number): number {
		return this.PI * diameter;
	}
}

console.log(2 * Helpers.PI);
console.log(Helpers.calcCircumference(8));

// Abstract Classes
abstract class Project {
	projectName: string = "Thenavigo.com";
	budget: number = 1000;

	abstract changeName(name: string): void;

	calcBudget() {
		return this.budget * 2;
	}
}

class ITProject extends Project {
	changeName(name: string): void {
		this.projectName = name;
	}
}

let newProject = new ITProject();
console.log(newProject);
newProject.changeName("http://see-docs.com/");
console.log(newProject);

// Private Constructors 
class OnlyOne {
	private static instance: OnlyOne;

	private constructor(public name: string) {}

	static getInstance() 
	{
		if (!OnlyOne.instance) {
			OnlyOne.instance = new OnlyOne('The Only One');
		}
		return OnlyOne.instance;
	}
}

let wrong = new OnlyOne('The Only One');
let right = OnlyOne.getInstance();

run tsc You see "Constructor of class 'OnlyOne' is private and only accessible within the class declaration."

// Readonly Properties
class OnlyOne {
	private static instance: OnlyOne;
	public readonly name: string;

	private constructor(name: string) {
		this.name = name;
	}

	static getInstance() 
	{
		if (!OnlyOne.instance) {
			OnlyOne.instance = new OnlyOne('The Only One');
		}
		return OnlyOne.instance;
	}
}

let wrong = new OnlyOne('The Only One');
let right = OnlyOne.getInstance();
console.log(right.name);
right.name = 'Something else';

run tsc You see "Constructor of class 'OnlyOne' is private and only accessible within the class declaration."
Left-hand side of assignment expression cannot be a constant or a read-only property.

// Module Exercise: Solution
// Exercice 1

function Car(name) {
	this.name = name;
	this.acceleration = 0;

	this.honk = function() {
		console.log("Pat");
	};

	this.accelerate = function(speed) {
		this.acceleration = this.acceleration + speed;
	}
}
var car = new Car("BWM");
car.honk();
console.log(car.acceleration);
car.accelerate(10);
console.log(car.acceleration);

// Exercice 2
var baseObject = {
	width: 0,
	length: 0
};
var rectangle = Object.create(baseObject);
rectangle.width = 5;
rectangle.length = 2;
rectangle.calcSize = function() {
	return this.width * this.length;
};
console.log(rectangle.calcSize());

// Exercice 3
var person = {
	_firstName: ""
};
Object.defineProperty(person, "firstName", {
	get: function () {
		return this._firstName;
	},
	set: function (value) 
	{
		if (value.length > 3) {
			this._firstName = value;
		}
		else {
			this._firstName = "";
		}
	},
	enumerable: true,
	configurable: true
});
console.log(person.firstName);
person.firstName = "Patrick";
console.log(person.firstName);
person.firstName = "john wick";
console.log(person.firstName);


// Solutions 

// Exercice 1 - Class
class Car {
	name: string;
	acceleration: number = 0;

	constructor(name: string) {
		this.name = name;
	}

	honk() {
		console.log("Pat");
	}

	accelerate(speed: number) {
		this.acceleration = this.acceleration + speed;
	}
}

const car = new Car("BWM");
car.honk();
console.log(car.acceleration);
car.accelerate(20);
console.log(car.acceleration);

// run tsc solutions.ts

// Exercice 2 - Inheritance
class BaseObject {
	width = 0;
	length = 0;
}

class Rectangle extends BaseObject {
	calcSize() {
		return this.width * this.length;
	}
}

const rectangle = new Rectangle();
rectangle.width = 5;
rectangle.length = 10;
console.log(rectangle.calcSize());

// run tsc solutions.ts

// Exercice 3 -  Getters & Setters
class Person {
	private _firstName: string = "";

	get firstName() {
		return this._firstName;
	}

	set firstName(value: string) {
		if (value.length > 3) {
			this._firstName = value;
		} else {
			this._firstName = "";
		}
	}
}

const person = new Person();
console.log(person.firstName);
person.firstName = "Et";
console.log(person.firstName);
person.firstName = "Patrick";
console.log(person.firstName);


// run tsc solutions.ts --t es5