// - Simple Generic
function echo(data: any) {
	return data;
}

console.log(echo("Max"));
console.log(echo(27));
console.log(echo({name: "Pat", age: 27}));

// - Creating A Generic Function: Better Generic
function betterEcho<T>(data: T) {
 	return data;
 }

console.log(betterEcho("Max").length);
console.log(betterEcho<number>(27));
console.log(betterEcho({name: "Pat", age: 27}));

// - Built-In Generic Type: Arrays
const testResults: Array<number> = [1.94, 2.33];
testResults.push(-2.99);
console.log(testResults);

// - Generic Types And Arrays
function printAll<T>(args: T[]) {
	args.forEach((element) => console.log(element));
}
printAll<string>(["Tomato", "Banana"]);


// - Using Generic Types
const echo2: <T>(data: T) => T = betterEcho;

console.log(echo2<string>("Something"));

// - Creating A Generic Class
class SimpleMath<T> {
	baseValue: T;
	multiplyValue: T;
	calculate(): number {
		return +this.baseValue * +this.multiplyValue;
	}
}

const simpleMath = new SimpleMath();
simpleMath.baseValue = 10;
simpleMath.multiplyValue = 20;
console.log(simpleMath.calculate());


// Constraints
