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
const max = new Max(max");
console.log(max);
```