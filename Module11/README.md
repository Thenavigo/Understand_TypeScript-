# WE COVER

*Understanding TypeScript Tutorial *

# Table of Contents


1. [Module 11: TypeScript Workflows]() 👇

	 
```bash
 - Introduction

Welcome to the TypeScript Workflows.
```


```bash
 - Using "tsc" and the tsconfig File


We can use tsc or tsc -w
```


```bash
 - How TypeScript Resolves Files Using The Tsconfig.Json File


We can use tsc or tsc -w
```


```bash
 - Using "tsc" and the tsconfig File


We can use tsc or tsc -w
```


```bash
 - How TypeScript Resolves Files Using The Tsconfig.Json File

 Look Official documentation.

 https://www.typescriptlang.org/docs/handbook/tsconfig-json.html
```


```bash
 - More On "Tsc" And The Tsconfig File

  Look Official documentation.

https://www.typescriptlang.org/docs/handbook/compiler-options.html


To get our tsconfig file we just have to do tsc --init


for example if we change the path of our tsconfig in a config directory, the compilation will be as follows:

tsc -p config/tsconfig.json
```


```bash
 - Adding TypeScript Into A Gulp Workflow

 1 - install gulp-typescript like this -> npm i --save-dev gulp gulp-typescript

 2 - create gulpfile.js and write this body content


var gulp = require('gulp');
var ts = require('gulp-typescript');

var tsProject = ts.createProject("tsconfig.json");

gulp.task("typescript", function() {
	return tsProject.src()
		.pipe(ts(tsProject))
		.pipe(gulp.dest(""));
});

gulp.task("watch", function() {
	gulp.watch("*.ts", ["typescript"]);
});

gulp.task("default", ["watch"]);


3 - configure your package.json like this:

 "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "lite-server",
    "build": "gulp"
  },


 4 - do -> npm run build


 5 - official documentation : https://www.npmjs.com/package/gulp-typescript
```


```bash
 -  Adding TypeScript Into A Webpack Workflow


 1 - install webpack like this -> npm i --save-dev webpack ts-loader


 2 - create file webpack.config.js and write this body content

 module.exports = {
	entry: "./app.ts",
	output: {
		filename: "bundle.js"
	},
	module: {
		rules: [
			{ test: /\.ts$/, loader: "ts-loader"}
		]
	}
};


 3- configure Your package.json like this :
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "lite-server",
    "build": "webpack -d --watch",
    "build:prod": "webpack -p"
  },


 4 - run  npm install --save-dev typescript


 5 - You also need to have a tsconfig.json file. For example

 {
  "compilerOptions": {
    "target": "ES5",
    "module": "system",
    "moduleResolution": "node",
    "sourceMap": true,
    "emitDecoratorMetadata": true,
    "experimentalDecorators": true,
    "removeComments": false,
    "noImplicitAny": false
  },
  "exclude": [
    "node_modules",
    ".npm"
  ]
}


6 - run npm run build
```