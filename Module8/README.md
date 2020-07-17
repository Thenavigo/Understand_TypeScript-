# WE COVER

*Understanding TypeScript Tutorial *

# Table of Contents


1. [Module 8: Generics]() 👇

	 
```bash
 - Introduction

Welcome to the Generics.
```

```bash
 - Why And What? : Simple Generics

 function echo(data: any) {
	return data;
}

console.log(echo("Max"));
console.log(echo(27));
console.log(echo({name: "Pat", age: 27}));
```

```bash
 - Creating A Generic Function : Better Generic

 function betterEcho<T>(data: T) {
 	return data;
 }

console.log(betterEcho("Max").length);
console.log(betterEcho<number>(27));
console.log(betterEcho({name: "Pat", age: 27}));
```


```bash
- Built-In Generic Type: Arrays

const testResults: Array<number> = [1.94, 2.33];
testResults.push(-2.99);
console.log(testResults);
```


```bash
- Generic Types And Arrays

function printAll<T>(args: T[]) {
	args.forEach((element) => console.log(element));
}
printAll<string>(["Tomato", "Banana"]);
```

```bash
- Using Generic Types

const echo2: <T>(data: T) => T = betterEcho;

console.log(echo2<string>("Something"));
```


```bash
- Creating A Generic Class

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
```


```bash
- Constraints

class SimpleMath<T extends number | string> {
	baseValue: T;
	multiplyValue: T;
	calculate(): number {
		return +this.baseValue * +this.multiplyValue;
	}
}

const simpleMath = new SimpleMath<string>();
simpleMath.baseValue = "10";
simpleMath.multiplyValue = "20";
console.log(simpleMath.calculate());
```


```bash
- Using More Than One Generic Type

class SimpleMath<T extends number | string, U extends number | string> {
	baseValue: T;
	multiplyValue: U;
	calculate(): number {
		return +this.baseValue * +this.multiplyValue;
	}
}

const simpleMath = new SimpleMath<string, number>();
simpleMath.baseValue = "10";
simpleMath.multiplyValue = 20;
console.log(simpleMath.calculate());
```

```bash
- Exercise:

Create a Generic Map Class
```


```bash
- Solution:

class MyMap<T> {
	private map : {[key: string]: T} = {};

	setItem(key: string, item: T) {
		this.map[key] = item;
	}

	getItem(key: string) {
		return this.map[key];
	}

	clear() {
		this.map = {}
	}

	printMap() {
		for (let key in this.map) {
			console.log(key, this.map[key]);
		}
	}
}


const numberMap = new MyMap<number>();
numberMap.setItem("seedoc", 10);
numberMap.setItem("thenavigo", 10);
console.log(numberMap.getItem("seedoc"));
numberMap.printMap();
numberMap.clear();
numberMap.printMap();


const stringMap = new MyMap<string>();
stringMap.setItem("seedoc", "10");
stringMap.setItem("thenavigo", "10");
console.log(stringMap.getItem("seedoc"));
stringMap.printMap();
stringMap.clear();
stringMap.printMap();
```