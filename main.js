// This script serves as a crash course/reviewer of es6 features which would be heavily 
// utilized on the react training. Should you need more information. You can go to:
// http://es6-features.org/
// if you need a deeper explanation of some of the features shown, or want a more exhaustive list

// ------------------------  const  -------------------------------------------------------
// value can't get reassigned

const constVal = 1;
// constVal = 2; // will throw error, cannot reassign value

console.log('constVal', constVal);

const constObj = {
  name: 'oldName'
}; 
constObj.name = 'newName'; // main object can't be reassigned, but object fields can be reassigned

console.log('constObj', constObj.name);

// ------------------------  let  ---------------------------------------------------------
// better scope control over 'var'

let letVal = 'oldValue';
letVal = 'newValue';

console.log('letVal', letVal);

{
    let scopedLet = 'abc';
    console.log('scopedLet', scopedLet);
}
// console.log('scopedLet', scopedLet); // not visible anymore

console.log('old concat ' + letVal);
console.log(`new concat ${letVal}`);

// ------------------------  arrow functions  ---------------------------------------------
classicFxn = function (args) {
  return `classicFxn ${args}`; 
}
console.log(classicFxn('arg'));

arrowFxn = args => `arrowFxn ${args}`; // single arguments (no parenthesis required, though allowed)
console.log(arrowFxn('arg'));

arrowFxnMultiArg = (arg1, arg2) => `arrowFxnMultiArg ${arg1} ${arg2}` // single arguments (parenthesis required)
console.log(arrowFxnMultiArg('one', 'two'));

arrowFxnMultiline = () => { // no args (parenthesis required)
  let variable = 'abc123'
  console.log(`arrowFxnMultiline ${variable}`)
}; // multiline fxn (curly brace required)
arrowFxnMultiline();

// ------------------------  foreach  -----------------------------------------------------
const fruits = ['apples', 'oranges', 'grapes']
fruits.forEach((fruit, idx) => console.log(`forEach ${fruit} ${idx}`));

// ------------------------  map  ---------------------------------------------------------
// perform operation to all objects in array
const singleFruits = fruits.map(fruit => fruit.slice(0, -1)); // removes 's' from all fruits
console.log('map', singleFruits);

// ------------------------  filter  ------------------------------------------------------
// removes entries from array not satisfying specific condition
const people = [
  {name:'Alice', gender:'F'},
  {name:'Bob', gender:'M'},
  {name:'Carl', gender:'M'},
]
const allFemale = people.filter(person => person.gender === 'F');
console.log('filter', allFemale);

// ------------------------  spread operator (...)  --------------------------------------- 
// gets values from original container and 'spreads' it inside array or object
const arr = [0, 1, 2]
const arrInsideArr = [arr, 3, 4]; // [[0,1,2],3,4] 
const arrUsingSpread = [...arr, 3, 4]; // [0,1,2,3,4] 
const arrUsingSpreadFilter = [...arrUsingSpread.filter(num => num % 2 ==0)] // [0,2,4]

const person = {
  name: 'Victor',
  age: 35
};
const newPerson = {
  ...person,
  age: 39, // can override old value from spread operator
  gender: 'Male' // add new field to object
};
console.log('spread', newPerson);

// ------------------------  destructuring operator {}  -----------------------------------
// extracts values from objects and assign to variable

const profile = {
  name: 'Mark',
  occupation: {
    company: 'Nokia',
    title: 'Software Engineer'
  },
  skills: ['javascript', 'c++', 'java']
}

const { name, occupation, skills } = profile; // gets name, occupation, skills field and stored as variable
console.log('destructuring 1', name, occupation, skills);
const { company, title } = occupation;
console.log('destructuring 2', company, title);

// ------------------------  classes  -----------------------------------------------------

class Person {
  constructor(name, age) {
    console.log(`Employee ${name} created`)
    this.name = name;
    this.age = age;
  }

  greet() {
    return `Hi, my name is ${this.name} and I'm ${this.age}`;
  }
}

const person1 = new Person('Bert', 24);
console.log('class 1', person1.greet());
const person2 = new Person('Kim', 25);
console.log('class 2', person2.greet());

// ------------------------  subclasses  --------------------------------------------------
class Employee extends Person {
  constructor(name, age, position) {
    super(name, age);
    this.position = position;
  }

  info() {
    return `${this.name} is a ${this.position}`
  }
}

const employee1 = new Employee('Kevin', 30, 'SW Engineer');
console.log(employee1.info());