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