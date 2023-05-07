// change everything below to the newer Javascript!

//1#let + const
var a = 'test';
var b = true;
var c = 789;
a = 'test2';

//1#Solution: 
let a = 'test';
const b = true;
const c = 789; 
a = 'test2';

//2#Destructuring
var person = {
    firstName : "John",
    lastName  : "Doe",
    age       : 50,
    eyeColor  : "blue"
};

var firstName = person.firstName;
var lastName = person.lastName;
var age = person.age;
var eyeColor = person.eyeColor;

//2#Solution: 
const {firstName, lastName, age, eyeColor} = person;

//3#Object properties
var a = 'test';
var b = true;
var c = 789;

var okObj = {
  a: a,
  b: b,
  c: c
};

//3#Solution:
var okObj = {a, b, c};

//4#Template strings
var message = "Hello " + firstName + " have I met you before? I think we met in " + city + " last summer no???";
//4#Solution:
var message = `Hello ${firstName} have I met you before? I think we met in ${city} last summer no???`;


//5# default arguments
// default age to 10;
function isValidAge(age) {
    return age
}

//5#Solution:
const isValidAge = (age = 10) => age;

//6#Symbol
// Create a symbol: "This is my first Symbol"

//6#Solution:
const sym = Symbol('This is my first Symbol');

//7#Arrow functions
function whereAmI(username, location) {
    if (username && location) {
        return "I am not lost";
    } else {
        return "I am totally lost!";
    }
}

//7#Solution:
const whereAmI = (username,location) => {
    if (username && location) {
        return "I am not lost";
    } else {
        return "I am totally lost!";
    }
}