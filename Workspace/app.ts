// string
let myName = "Max";
// myName = 28;

// number
let myAge = 27;
// myAge = 'Max';

// boolean
let hasHobbies = false;
// hasHobbies = 1;

// assign types
let myRealAge: number;
myRealAge = 27;
//myRealAge = "27";

// array and types
let hobbies = ["Cooking", "Sports"];
console.log(hobbies[0]);
//hobbies = [100];

//you can see error in your console because typeof hobbies is a string. but if i change like this :

let hobbies: any[] = ["Cooking", "Sports"];
hobbies = [100];
console.log(hobbies[2]);

// tuples
let address: [string, number] = ["Superstreet", 99];

//enum
 enum Color {
 	Gray, //0
 	Green, //1
 	Blue //2
 }

 let myColor: Color = Color.Green;
 console.log(myColor);

 You see 1 in your console. because number assign automatically.

 // any
 let car: any = "BWM";
 console.log(car);
 car = { brand: "BWM", series: 3};
 console.log(car);

  You see Object

  // Using Types For A Better Code - Understanding The Created JavaScript Code

  - In order to understand the JavaScript code created, it is important to know beforehand the basics and therefore the types of data to be created and manipulated.


// functions

function returnMyname()
{
	retrun myName;
}
console.log(returnMyname());

You see 'Max'

a character string created at the beginning of this course.

// void
function sayHello(): void 
{
	console.log("Hello");	
}

// argument types
function multiply(alue1: number, value2: number): number 
{
	return value1 + value2;	
}

console.log(multiply(2, 'Max'));

You see error because Max is not a number.