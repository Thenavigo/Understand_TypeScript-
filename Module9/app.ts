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



// 