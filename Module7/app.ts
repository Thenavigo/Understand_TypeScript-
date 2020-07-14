// - The Basics About Interfaces.

interface NamePerson {
	name: string;
	age?: number;
	[propName: string]: any;
	greet(lastName: string): void;
}

function greet(person: NamePerson) {
	console.log("Hello, " + person.name);
}

function changeName(person: NamePerson) {
	person.name = "Kraken";
}

//const person = {
//	name: "Patrick",
//	age: 27
//};

const person: NamePerson = {
	name: "Patrick",
	hobbies: ["Cooking", "Sports"],
	greet(lastName: string) {
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





 



