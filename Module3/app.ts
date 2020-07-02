let myName: string = "Max";
let myAge: number = 18;
myName = 30;


run tsc you see err-> Type '30' is not assignable to type 'string'

but app.js content myName = 30; it is "default beheviour".

