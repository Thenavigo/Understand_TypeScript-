// Exercice 1

function Car(name) {
	this.name = name;
	this.acceleration = 0;

	this.honk = function() {
		console.log("Pat");
	};

	this.accelerate = function(speed) {
		this.acceleration = this.acceleration + speed;
	}
}
var car = new Car("BWM");
car.honk();
console.log(car.acceleration);
car.accelerate(10);
console.log(car.acceleration);

// Exercice 2
var baseObject = {
	width: 0,
	length: 0
};
var rectangle = Object.create(baseObject);
rectangle.width = 5;
rectangle.length = 2;
rectangle.calcSize = function() {
	return this.width * this.length;
};
console.log(rectangle.calcSize());

// Exercice 3
var person = {
	_firstName: ""
};
Object.defineProperty(person, "firstName", {
	get: function () {
		return this._firstName;
	},
	set: function (value) 
	{
		if (value.length > 3) {
			this._firstName = value;
		}
		else {
			this._firstName = "";
		}
	},
	enumerable: true,
	configurable: true
});
console.log(person.firstName);
person.firstName = "Patrick";
console.log(person.firstName);
person.firstName = "john wick";
console.log(person.firstName);