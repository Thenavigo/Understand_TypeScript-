// Exercice 1 - As Arrow Function
const double = (value: number) => value * 2;
console.log(double(10));

// Exercice 2 - Default Params
const greet = (name = "Max") => {
	console.log("Hello " + name);
};
greet();
greet("Anna");

// Exercice 3 - Spread Operator
const numbers = [-3, 33, 38, 5];
console.log(Math.min(...numbers));

// Exercice 4 Spread Operator
const newArray = [66, 2];
newArray.push(...numbers);
console.log(newArray);

// Exercice 5 - Destructuring Arrays
const testResults = [3.89, 2.99, 1.38];
const [result1, result2, result3] = testResults;
console.log(result1, result2, result3);

// Exercice 6 - Destructuring Objects
const scientist = {firstName: "John", experience: 12};
const {firstName, experience} = scientist;
console.log(firstName, experience);