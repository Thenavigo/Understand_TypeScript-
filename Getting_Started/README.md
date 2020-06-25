# WE COVER

*Understanding TypeScript Tutorial *

# Table of Contents


1. [Module 1: Getting Started]() 👇

	 
 ```bash
	 Getting Started - Course Introduction
```


👋  Hi everyone and welcome to this wonderful course, what we can tell you is this: this course is for you and so be very attentive and focused because we are going to have fun here.

 ```bash
	 Getting Started - What Is TypeScript?
```

- 🤤 **TypeScript** is a typed superset of JavaScript that compiles to plain JavaScript. 
- Any browser. Any host. Any OS. Open source. even then TypeScript is a free and open source programming language developed 🔒 **by Microsoft** 🔒 
- To improve and secure the production of JavaScript code. 
- It is a superset of JavaScript (i.e. any correct JavaScript code can be used with TypeScript). 
- TypeScript code is transcompiled into JavaScript, and can thus be interpreted by any web browser or JavaScript engine. 
- TypeScript was co-created 💥 by **Anders Hejlsberg**, the main inventor of C#.


![Preview](https://github.com/patbi/Understand_TypeScript-/blob/master/Getting_Started/What_Is_TypeScript.JPG)



 ```bash
	 Getting Started - Why TypeScript?
```

- TypeScript is a superset of JavaScript which primarily provides optional static typing, classes and interfaces. One of the big benefits is to enable IDEs to provide a richer environment for spotting common errors as you type the code.



- Getting Started - How to use it?


 ```bash
 function Greeter(greeting) 
 {
	this.greeting = greeting;
 }

Greeter.prototype.greet = function() 
{
    return "Hello, " + this.greeting;
}

let greeter = new Greeter({message: 'world'});

let button = document.createElement('button');
button.textContent = "Say Hello";
button.onclick = function() 
{
    alert(greeter.greet());
};

document.body.appendChild(button);
```

You see Hello, [object Object]

- To get our Hello world we have to add the nobre object type as well:

 ```bash
 function Greeter(greeting: string) 
 {
	this.greeting = greeting;
 }

Greeter.prototype.greet = function() 
{
    return "Hello, " + this.greeting;
}

let greeter = new Greeter('world');

let button = document.createElement('button');
button.textContent = "Say Hello";
button.onclick = function() 
{
    alert(greeter.greet());
};

document.body.appendChild(button);
```

You see "Hello world".


 ```bash
	 Getting Started - Installing TypeScript
```

1- [Install nodejs](https://nodejs.org/en/) 

And run 

 ```bash
	 npm -g install typescript || sudo npm -g install typescript
```


Next 

 ```bash
	 Getting Started - Using TypeScript
```


We created two files, one .html and one .ts


In the first file .html we have

```bash
<!DOCTYPE html>
<html>
<head>
	<title>TypeScript</title>
</head>
<body>

<script src="./script.js"></script>
</body>
</html>
```


In the second file .ts we have

```bash
function Greeter(greeting: string) 
{
    this.greeting = greeting;
}

Greeter.prototype.greet = function() 
{
    return "Hello, " + this.greeting;
}

let greeter = new Greeter('world');

let button = document.createElement('button');
button.textContent = "Say Hello";
button.onclick = function() {
    alert(greeter.greet());
};

document.body.appendChild(button);
```

Next we just have to enter the following command and refresh our browser to see the result!

```bash
tsc script.ts
```

You see Hello, world.
