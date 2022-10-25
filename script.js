// Understanding Let and Const

/*
const myName = "Amol";
console.log(myName);

myName = "As";
console.log(myName);

*/

// Arrow Functions.

/*
// function
function printMyName(name) {
  console.log(name);
}

printMyName("Amol");

// arrow functions
const printMyNameArrow = (name) => {
  console.log(name);
};

printMyNameArrow("AmolShelke");

// returns result.

const multipy = (number) => number * 2;

console.log(multipy(5));
*/

// Exports and Imports.

/*
In React projects (and actually in all modern JavaScript projects), you split your code across multiple 
JavaScript files - so-called modules. You do this, to keep each file/ module focused and manageable.

To still access functionality in another file, you need export (to make it available) and import (to get access)statements.

You got two different types of exports:default (unnamed)and named exports:
*/

// Default Import

const person = {
  name: "Amol",
};

export default person;

// Named Import

export const clean = () => {};

export const baseData = 10;
