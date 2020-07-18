// - Creating A Class Decorator run tsc -w

function logged(constructorFn: Function) {
	console.log(constructorFn);
}

@logged
class Person {
	constructor() {
		console.log("Hi");
	}
}

// - Decorator Factories
function logging(value: boolean) {
	return value ? logged : null;
}

@logging(true)
class Car {
	
}

// - Creating A Useful Decorator : Advanced
function printable(constructorFn: Function) {
	constructorFn.prototype.print = function() {
		console.log(this);
	}
}

@printable
class Plant {
	name = "Green Plant";
}
const plant = new Plant();
(<any>plant).print();


// Using Multiple Decorators
function printable(constructorFn: Function) {
	constructorFn.prototype.print = function() {
		console.log(this);
	}
}

@logging(true)
@printable
class Plant {
	name = "Green Plant";
}
const plant = new Plant();
(<any>plant).print();


// A First Summary


// Method Decorators
function editable(value: boolean) {
	return function(target: any, propName: string, descriptor: PropertyDescriptor) {
		descriptor.writable = value;
	}
}

class Project {
	projectName: string;

	constructor(name: string) {
		this.projectName = name;
	}

	@editable(false)
	calcBudget() {
		console.log(1000000000000000000);
	}
}

const project = new Project("Super Project");
project.calcBudget();
project.calcBudget = function() {
	console.log(1000000000000000000000000000);
};
project.calcBudget();



// Property Decorators
function editable(value: boolean) {
	return function(target: any, propName: string, descriptor: PropertyDescriptor) {
		descriptor.writable = value;
	}
}

function overwritable (value: boolean) {
	return function (target: any, propName: string): any {
		const newDescriptor: PropertyDescriptor = {
			writable: value
		};
		return newDescriptor;
	}
}

class Project {
	@overwritable(false)
	projectName: string;

	constructor(name: string) {
		this.projectName = name;
	}

	@editable(false)
	calcBudget() {
		console.log(1000000);
	}
}

const project = new Project("Super Project");
project.calcBudget();
project.calcBudget = function() {
	console.log(20000000);
};
project.calcBudget();
console.log(project);



// Parameter Decorators
function printInfo(target: any, methodName: string, paramIndex: number) {
	console.log("Target: ", target);
	console.log("methodName: ", methodName);
	console.log("paramIndex: ", paramIndex);
}


class Course {
	name: string;

	constructor(name: string) {
		this.name = name;
	}

	printStudentNumbers(mode: string, @printInfo printAll: boolean) {
		if (printAll) {
			console.log(100000);
		} else {
			console.log(200000);
		}
	}
}

const course = new Course("Super Course");
course.printStudentNumbers("anything", true);
course.printStudentNumbers("anything", false);