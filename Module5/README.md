# WE COVER

*Understanding TypeScript Tutorial *

# Table of Contents


1. [Module 5: Using Classes to create Objects]() 👇

	 
```bash
- Using Classes to create Objects - Introduction

Welcome to the Using Classes to create Objects
```

```bash
- Using Classes To Create Objects - Creating Classes And Class Properties
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
```


```bash
- Using Classes To Create Objects - Class Methods And Access Modifiers
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
```



```bash
- Using Classes To Create Objects - Inheritance
class Max extends Person {
	name = "Max";
}
const max = new Max("Anna", "max");
console.log(max);
```


```bash

- Using Classes To Create Objects - Inheritance And Constructors
class Max extends Person {
	// name = "Max";

	constructor(username: string) {
		super("Max", username);
	}
}
const max = new Max("max");
console.log(max);
```


```bash
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
```


```bash
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
```


```bash
// Static Properties & Methods
class Helpers {
	static PI: number = 3.14;
	static calcCircumference(diameter: number): number {
		return this.PI * diameter;
	}
}

console.log(2 * Helpers.PI);
console.log(Helpers.calcCircumference(8));
```


```bash
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
```