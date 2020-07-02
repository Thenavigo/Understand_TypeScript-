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