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
/*
const person = {
  name: "Amol",
};

export default person;

// Named Import

export const clean = () => {};

export const baseData = 10;
*/

// Classes.
/*
class Human {
  constructor() {
    this.gender = "male";
  }

  printGender() {
    console.log(this.gender);
  }
}

// Inheritence. // extneds
class Person extends Human {
  constructor() {
    super();
    this.name = "Amol shelke";
  }

  printMyName() {
    console.log(this.name);
  }
}

const person = new Person();
person.printMyName();
person.printGender();

// Es7 Next generation methods and properties.
class Human2 {
  gender = "female";

  printGender = () => {
    console.log(gender);
  };
}

class Person2 extends Human2 {
  name = "Amol Shelke";
  printMyName = () => {
    console.log(name);
  };
}

Person2.printMyName();
*/

// Spread and Rest Operators.

// Spread Operator.

// Array
const oldArray = ["a", "b", "c", "d"];
const newArray = [...oldArray, "e", "f", "g"];
console.log(newArray.length);
console.log(newArray);

// object
const person = {
  name: "Person",
};

const newPerson = {
  ...person,
  age: 28,
};

console.log(newPerson);

// Rest operator

const filter = (...args) => {
  return args.filter((el) => el === 1);
};

console.log(filter(1, 2, 4, 5, 1));
