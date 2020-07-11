/// <reference path="circleMath.ts" />
/// <reference path="rectangleMath.ts" />

import CircleMath = MyMath.Circle;

// Namespaces and Modules - An Introduction To Namespaces

//namespace MyMath {
//	const PI = 3.14;
//
//	export function calculateCircumference(diameter: number) {
//		return diameter * PI;
//	}
//
//	export function calculateRectangle(width: number, length: number) {
//		return width * length;
//	}
//}

const PI = 2.99;

console.log(MyMath.calculateRectangle(10,20));
console.log(CircleMath.calculateCircumference(3));
console.log(PI);

// run tsc


// - Namespaces And Multiple Files

//let's create two files like this

// touch circleMath.ts rectangleMath.ts

//and put in each respective function.

// run tsc, before insert in index.html  <script src="circleMath.js"></script> & <script src="rectangleMath.js"></script>

// Or run tsc --outFile app.js circleMath.ts rectangleMath.ts app.ts


// - Namespace Imports

// add two references like this /// <reference path="circleMath.ts" /> /// <reference path="rectangleMath.ts" />

// and run tsc app.ts --outFile app.js


// - More On Namespaces
//create namespace Circle like this in circleMath.ts
// Next import CircleMath = MyMath.Circle; in app.ts
// Next change console.log() like this -> console.log(CircleMath.calculateCircumference(3));console.log(CircleMath.calculateCircumference(3));
// Next run run tsc app.ts --outFile app.js

