// - The Basics About Interfaces.

interface NamedPerson {
	firstName: string;
	age?: number;
	[propName: string]: any;
	greet(lastName: string): void;
}

function greet(person: NamedPerson) {
	console.log("Hello, " + person.firstName);
}

function changeName(person: NamedPerson) {
	person.firstName = "Kraken";
}

//const person = {
//	firstName: "Patrick",
//	age: 27
//};

const person: NamedPerson = {
	firstName: "Patrick",
	hobbies: ["Cooking", "Sports"],
	greet(lastName: string) {
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

class Person implements NamedPerson {
	firstName: string;
	lastName: string;
	greet(lastName: string) {
		console.log("Hi, I am " + this.firstName + " " + lastName);
	};	
}

const myPerson = new Person();
myPerson.firstName = "Patrick";
myPerson.lastName = "Anything";
greet(myPerson);
myPerson.greet(myPerson.lastName);

// -  Function Types
interface DoubleValueFunc {
	(number1: number, number2: number): number;
}

let myDoubleFunction = function(value1: number, value2: number) {
	return (value1 + value2) * 2;
};

console.log(myDoubleFunction(10, 20));


// -Interface Inheritance
interface AgedPerson extends NamedPerson {
	age: number;
}

const oldPerson: AgedPerson = {
	age: 27,
	firstName: "Pat",
	greet(lastName: string) {
		console.log("Hello");
	}
};

console.log(oldPerson);

// - What Happens Once Interfaces Get Compiled

 



