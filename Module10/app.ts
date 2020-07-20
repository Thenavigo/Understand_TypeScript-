// - Installing A Third-Party Library
// like this:  npm install --save jquery



// - Importing The Library
//import jquery = require("jquery");
//const $: JQueryStatic = jquery;

import "jQuery";

$("#app").css({"background-color": "green"});



// - Translating JavaScript To TypeScript With TypeScript Definition Files
// Look Handbook documentation

// - Option 1: Manually download TypeScript Definition Files

// Look here -> https://github.com/DefinitelyTyped/DefinitelyTyped

// Managing TypeScript Defintion Files with the "typings" Package
// run npm i -g typings
// run typings install dt~jquery --global --save


// Easier Type Management With TypeScript 2.0
//run npm i --save-dev @types/jquery