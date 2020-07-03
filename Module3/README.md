# WE COVER

*Understanding TypeScript Tutorial *

# Table of Contents


1. [Module 3: Understanding the TypeScript Compiler]() 👇

	 
```bash
	 Understanding The TypeScript Compiler - Introduction
```

- In this module we will learn how to configure our Compiler.


```bash
	 Understanding The TypeScript Compiler - How Code Gets Compiled
```
app.ts

```bash
let myName: string = "Max";
let myAge: number = 18;
myName = 30;


run tsc you see err-> Type '30' is not assignable to type 'string'

but app.js content myName = 30; it is "default beheviour".
```



```bash
Understanding The TypeScript Compiler - Changing The Compiler Behavior On Errors

Here is to block the compiler so that it does not generate a .js file in case of error.


"noEmitOnError": true,

This option added to our tsconfig, will control "default beheviour"
```


```bash
Understanding The TypeScript Compiler - Debugging Your TypeScript Code Using Source Maps

run your project with "npm start" and do Ctrl + Shift + i

to see your files that are uploaded go to "Sources" you also have the "Console" for Debugging Your TypeScript

```


```bash
Understanding The TypeScript Compiler - Avoiding Implicit "Any"

let myName: string = "Max";
let myAge: number = 18;
let anything;
anything = 12

run tsc -> there is no error

but if you change in tsconfig.json "noImplicitAny": true,

you see "err"

to make up for that mistake you just have to do this:  

let anything: any;

//myName = 30;
```



```bash
Understanding The TypeScript Compiler - More Compiler Options
```
[Official Documentation](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html)

```bash
Understanding The TypeScript Compiler - Compiler Improvements With TypeScript 2.0

function Ts(isTrue: boolean) 
{
	let result: number;
	if (isTrue) {
	result = 12;
	}
	return result;	
}


run tsc -> there are no errors

and yet this code has a problem "result" has not been assigned!

if you add "strictNullChecks": true,  in your tsconfig.json you see "err"

Variable 'result' is used before being assigned.

To make up for it we just have to rewrite our code like this:

function Ts(isTrue: boolean, somethingElse: boolean) 
{
	let result: number;
	if (isTrue) {
	result = 12;
	}
	return result;	
}

if you add "noUnusedParameters": true,  in yor tsconfig.json you see "err"

'somethingElse' is declared but never used.

```


```bash
Understanding The TypeScript Compiler - Module Summary


so after finishing this module, on how to configure our compiler,
we have to be happy with our progress and move on very quickly to the next module which is even more exciting.

```