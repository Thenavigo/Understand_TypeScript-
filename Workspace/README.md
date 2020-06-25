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
	  "scripts": {
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

Here we are just finished with Module 1, we'll meet at Module 2 tomorrow.