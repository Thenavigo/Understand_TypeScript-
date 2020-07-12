# WE COVER

*Understanding TypeScript Tutorial *

# Table of Contents


1. [Module 5: Namespaces and Modules]() 👇

	 
```bash
- Namespaces and Modules - Introduction

Welcome to the Namespaces and Modules.
```


```bash
- Namespaces and Modules - An Introduction To Namespaces

namespace MyMath {
	const PI = 3.14;

	export function calculateCircumference(diameter: number) {
		return diameter * PI;
	}

	export function calculateRectangle(width: number, length: number) {
		return width * length;
	}
}

const PI = 2.99;

console.log(MyMath.calculateRectangle(10,20));
console.log(MyMath.calculateCircumference(3));
console.log(PI);

// run tsc
```


```bash
 - Namespaces And Multiple Files

let's create two files like this

- touch circleMath.ts rectangleMath.ts

and put in each respective function.

run tsc, before insert in index.html  
<script src="circleMath.js"></script> 
&
<script src="rectangleMath.js"></script>

// Or run tsc --outFile app.js circleMath.ts rectangleMath.ts app.ts
```



```bash
- Namespace Imports

 add two references like this in your "app.ts" 

 /// <reference path="circleMath.ts" /> 
 /// <reference path="rectangleMath.ts" />

and run tsc app.ts --outFile app.js
```

```bash
- More On Namespaces

1 - create namespace Circle like this in circleMath.ts
2 - Next import CircleMath = MyMath.Circle; in app.ts
3 - Next change console.log() like this -> console.log(CircleMath.calculateCircumference(3));
4 - Next run run tsc app.ts --outFile app.js
```

