// Exercice 1
var double = function(value) {
	return value * 2;
}
console.log(double(10));

// Exercice 2
var greet = function(name) {
	if (name === undefined) {name = "Patrick";}
	console.log("Hello, " + name);
};
greet();
greet("Anna");

//Exercice 3
var numbers = [-3, 33, 38, 5];
console.log(Math.min.apply(Math, numbers));


//Exercice 4
var newArray = [55, 20];
Array.prototype.push.apply(newArray, numbers);
console.log(newArray);

//Exercice 5
var testResults = [3.89, 2.99, 1.38];
var result1 = testResults[0];
var result2 = testResults[1];
var result3 = testResults[2];
console.log(result1, result2, result3);

//Exercice 6
var scientist = {firstName: "John", experience: 12};
var firstName = scientist.firstName;
var experience = scientist.experience;
console.log(firstName, experience);