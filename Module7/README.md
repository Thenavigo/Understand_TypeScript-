# WE COVER

*Understanding TypeScript Tutorial *

# Table of Contents


1. [Module 7: Doing Contract Work with Interfaces]() 👇

	 
```bash
 - Introduction

Welcome to the Doing Contract Work with Interfaces.
```


```bash
 - The Basics About Interfaces.

interface NamePerson {
	name: string;
}

function greet(person: NamePerson) {
	console.log("Hello, " + person.name);
}

function changeName(person: NamePerson) {
	person.name = "Kraken";
}

const person = {
	name: "Patrick",
	age: 27
};



greet(person);
changeName(person);
greet(person);

```


```bash
 - Interfaces And Properties.
 
 - do 
 greet({name: "Patrick", age: 27});
 
 - run tsc you see err

Object literal  may only specify know properties, and 'age' does not exist in type 'NamePerson.'

to solve this problem we just have to define our property as "optional." Like this:

interface NamePerson {
	name: string;
	age?: number;
}

run tsc
```


```bash
 - Interfaces And Methods.

We will manipulate the greet() method Like This

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

run tsc
```
