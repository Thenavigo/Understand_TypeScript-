# WE COVER

*Understanding TypeScript Tutorial *

# Table of Contents


1. [Module 1: Getting Started]() 👇

	 
 ```bash
	 Getting Started - Setting Up The Course Workspace
```

- We always create our two files one .html and another .ts
in our directory Workspace like this.

```bash
	 touch index.html app.ts
```

Next we're doing an in order to get our package.json that we're going to set up next.
inside of the folder

```bash
	 npm init
```

Next Install lite-server like this to get the updates automatically.

```bash
	 npm install lite-server --save-dev
```


Next: We configure our package.json as follows

```bash
"scripts": 
{
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "lite-server"
  },
```


Run 

```bash
	  npm start
```

We can quickly enter "Hello" to see the result.


- And to get out of Module1 we are going to compile our ts code in js with a visible result on our console.


we do a

```bash
	tsc --init 
```

Command that creates our file "tsconfig.json"


End we just have to do a tsc to get our app.js like this

```bash
	tsc
```

We just refresh our browser to see the result in console.

2. [Module 2: Using Types for a better Code]() 👇


	 
```bash
	 Using Types for a better Code - Introduction
```

So after we're done with our Module1, here we're going to move on to more interesting things to know : 

- know the data types with TypeScript.


```bash
	 Using Types for a better Code - Type Basics
```

// type: string 

In your folder Workspace -> app.ts write :

```bash
	 let myName = "Max";
	 myName = 28;
```

from our console we will get this error message after executing the command "tsc".

"error TS2322: Type '28' is not assignable to type 'string'".


```bash
	 Using Types For A Better Code - Numbers & Booleans
```

// type: number

```bash
	 let myAge = 27;
	// myAge = 'Max';
```

// type: boolean

```bash
	 let hasHobbies = false;
	// hasHobbies = 1;
```

```bash
	 Using Types For A Better Code - Assigning Types Explicitly
```

// Assigning Types Explicitly

```bash
	 let myRealNumber: number;
	 myRealNumber = 10;
	//myRealAge = "10";
```



