# WE COVER

*Understanding TypeScript Tutorial *

# Table of Contents


1. [Module 1: Getting Started]() 👇

	 
 ```bash
	 Getting Started - Setting Up The Course Workspace
```

- We always create our two files one .html and another .ts
in our directory Workspace like this.

```bash
	 touch index.html app.ts
```

Next we're doing an in order to get our package.json that we're going to set up next.
inside of the folder

```bash
	 npm init
```

Next Install lite-server like this to get the updates automatically.

```bash
	 npm install lite-server --save-dev
```


Next: We configure our package.json as follows

```bash
"scripts": 
{
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "lite-server"
  },
```


Run 

```bash
	  npm start
```

We can quickly enter "Hello" to see the result.


- And to get out of Module1 we are going to compile our ts code in js with a visible result on our console.


we do a

```bash
	tsc --init 
```

Command that creates our file "tsconfig.json"


End we just have to do a tsc to get our app.js like this

```bash
	tsc
```

We just refresh our browser to see the result in console.

2. [Module 2: Using Types for a better Code]() 👇


	 
```bash
	 Using Types for a better Code - Introduction
```

So after we're done with our Module1, here we're going to move on to more interesting things to know : 

- know the data types with TypeScript.


```bash
	 Using Types for a better Code - Type Basics
```

// type: string 

In your folder Workspace -> app.ts write :

```bash
	 let myName = "Max";
	 myName = 28;
```

from our console we will get this error message after executing the command "tsc".

"error TS2322: Type '28' is not assignable to type 'string'".


```bash
	 Using Types For A Better Code - Numbers & Booleans
```

// type: number

```bash
	 let myAge = 27;
	// myAge = 'Max';
```

// type: boolean

```bash
	 let hasHobbies = false;
	// hasHobbies = 1;
```

```bash
	 Using Types For A Better Code - Assigning Types Explicitly
```

// Assigning Types Explicitly

```bash
	 let myRealNumber: number;
	 myRealNumber = 10;
	//myRealAge = "10";
```

// Using Types For A Better Code - Arrays and Types


```bash
let hobbies = ["Cooking", "Sports"];
console.log(hobbies[0]);
hobbies = [100];

//you can see error in your console because typeof hobbies is a string. but if i change like this :

let hobbies: any[] = ["Cooking", "Sports"];
hobbies = [100];
console.log(hobbies[2]);
//hobbies = 100;

you can see error in your console because Type 'number' is not assignable to type 'any[]'.
```


// Using Types For A Better Code - Tuples

```bash
let address: [string, number] = ["Superstreet", 99];

//if change position like this:
//let address: [string, number] = [99, "Superstreet"];
//you can see error in your console
```

// Using Types For A Better Code - Enums

 ```bash
 enum Color {
 	Gray, //0
 	Green, //1
 	Blue //2
 }

 let myColor: Color = Color.Green;
 console.log(myColor);

 You see 1 in your console. because number assign automatically.
```


// Using Types For A Better Code - The "Any" Type

 ```bash
 let car: any = "BWM";
 console.log(car);
 car = { brand: "BWM", series: 3};
 console.log(car);

 You see Object
```

// Using Types For A Better Code - Understanding The Created JavaScript Code

- In order to understand the JavaScript code created, it is important to know beforehand the basics and therefore the types of data to be created and manipulated.


// Using Types For A Better Code - Using Types In Functions (Arguments & Return Values)

// functions

 ```bash
function returnMyname()
{
	retrun myName;
}
console.log(returnMyname());
```

You see 'Max'

a character string created at the beginning of this course.

// void

```bash
function sayHello(): void 
{
	console.log("Hello");	
}
```

// argument types

```bash
function multiply(value1: number, value2: number): number 
{
	return value1 + value2;	
}
console.log(multiply(2, 10));
```

// Using Types For A Better Code - Functions As Types

```bash
let myMultiply;
myMultiply = sayHello;
myMultiply();
myMultiply = multiply;
myMultiply();

-------------function types-------------

let myMultiply: (a: number, b: number) => number;
myMultiply = sayHello;
myMultiply();
myMultiply = multiply;
console.log(myMultiply(5,2));

You see error type 'void' is not assignable to type 'number'
```

// Using Types For A Better Code - Objects And Types

// objects

```bash
let userData: { name: string, age: number } = {
	name: "Max",
	age: 27
};
userData = {};
You see error Type '{}' is not assignable to type '{ name: string; age: number;}'

if you write like this:
userData = {
	a: "Hello",
	b: 25
};

you see error type '{a: string; b: number;}' is 
not assignable to type '{ name: string; age: number;}'
```

// Using Types For A Better Code - Example: Putting It All Together In A Complex Object

// complex object

```bash
let complex: {data: number[], output: (all: boolean) => number[]} = {
	data: [100, 3.85, 15],

	output: function (all: boolean): number[] {
	return this.data;
	}
};
```

// Using Types For A Better Code - Creating Custom Types With Type Aliases

// type alias

```bash
type Complex = {data: number[], output: (all: boolean) => number[]};

let complex2: Complex = {
	data: [100, 3.85, 15],

	output: function (all: boolean): number[] {
	return this.data;
	}
};
```


// Using Types For A Better Code - Allowing Multiple Types With Union Types

// union types

```bash
let myRealNumber: number | string = 27;
myRealNumber = "27";
//myRealNumber = true;

you see err -> Type 'boolean' is not assignable to type 'number | string'.
```


// Using Types For A Better Code - Checking For Types During Runtime

// check types

```bash
let finalValue = "A string";
if (typeof finalValue == "number") {
	console.log("Final value is a number");
}
```








