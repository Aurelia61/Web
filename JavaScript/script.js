// const para = document.querySelector('p');

// para.addEventListener('click', updateName);

// function updateName() {
//     let name = prompt('Enter a new name');
//     para.textContent = 'Player 1: ' + name;
// }


console.log("Hello, World!");
console.info("This is an information.");
console.error("This is an error !");
console.warn("This is a warning !");


//! AND OR TRUE !TRUE
// and → &&
// or → ||
// / !true → false 

//! ternary
// if → ?
// else → :


//! SWITCH ( less powerfull than if...else )
// let userCountry = prompt("Where are you from");

// switch(userCountry){
// 	case "France":
// 		console.log("Bonjour");
// 		break;
// 	case "England":
// 		console.log("Hello");
// 		break;
// 	case "Germany":
// 		console.log("Hallo");
// 		break;
// 	case "Italy":
// 		console.log("Ciao");
// 		break;
// 	case "Spain":
// 		console.log("Hola");
// 		break;
// 	default:
// 		console.log("Hey there");
// 		break;
// }


//! to get number with prompt
const ageNumber = parseInt(prompt("How old are you?"));

//! to know a variable type
// in the browser console tape
// typeof(1);

//! Specific Numbers
// NaN (Not A Number) is a number used to represent an invalid number.
// Infinity and -Infinity are numbers that represent the mathematical Infinity (∞)
// Null is used to represent an intentional absence of value.
// Undefined is the default value for a variable that exists but has not yet been defined.

//! common primitive data types
// BigInt is used to represent big integers.
// const bigNumber = BigInt(9007199254740991);
// typeof(bigNumber);
// / / 'bigint'
// A symbol is a unique value, two symbols will never be equal even if they're set to the same value.

//! kinds of VARIABLES
var userAge = 30;
var fruits = ['apple', 'banana', 'kiwi'];
var userCar = {
    model: "BMW",
    year: "2000"
}
var sayMyName = function () {
    console.log("My name is Bob!")
}

//! assigne a new value
var userName = "Bob";
console.log(userName);
// Will print "Bob"
userName = "Paul";
console.log(userName);
// Will print "Paul"

//! LET and CONST
// LET représente une variable que l'on peut ré-assigner (comme var).
let myCity = "Paris";
myCity = "Berlin";
console.log(myCity);
// Berlin
// CONST représente une variable que l'on ne peut pas ré-assigner.
//Tu dois l'utiliser dès que tu sais que la variable ne doit pas être réassignée.
const myName = "Bob";
myName = "John";
// TypeError: Assignment to constant variable.

//! different kinds of comments
// This is a comment for one line

/* This comment
is on multiple lines */

/**
* This comment
* is used for
* documentation
*/

//! EQUAL tests
// Valeur égale et type égal
// Dans ce cas, on va regarder si les valeurs sont strictement égales.
// Cela signifie que les valeurs et types sont les mêmes.

// 1 === 1; // true 
// "Bob" === "Bob"; // true 
// "Bob" === "bob"; // false
// 1 === "1"; // false

// Valeur égale
// Dans ce cas, on regarde seulement si les valeurs sont égales.
// 1 == 1; // true
// 1 == "1"; // true

// Differentes valeurs ou differents types
// Dans ce cas, on regarde si les valeurs ou les types sont differents.
// 1 != 2; // true
// 1 != "1"; // false

// Supérieur à, supérieur ou égal
// Ici, on vérifie que la valeur est supérieure à une autre
// en ajoutant le symbole d'égalité = juste après le >, on peut vérifier si la valeur est supérieure ou égale.
// 2 > 1; // true
// 2 >= 2; // true

// Ça fonctionne aussi dans l'autre sens avec le symbole inférieur <.
// 2 < 3; // true
// 2 <= 2; // true

//! String interpolation
const name = "Donald Duck";
console.log(`Hello, I'm ${name}`);
console.log(`You can write Js expressions: ${1 + 1}`);
console.log(`You can write Js expressions: ${1 < 1}`);


//! Higher-order function
function sayHello(userName){
	console.log(`Hello, ${userName}`);
}

function sayWelcome(userName){
	console.log(`Welcome, ${userName}`);
}

function askUserName(callback){
	const name = prompt("Hey, what's your name?");
	callback(name);
}

askUserName(sayWelcome);
askUserName(sayHello);


//! Callback function
//  We create the sum function
function sum(a, b) {
    return a + b;
}

//  We create the multiply function
function multiply(a, b) {
    return a * b;
}

// We create the calculator function that accept a callback
function calculator(callback, firstValue, secondValue) {
    // We use the  callback in the console.log to print the result
    console.log(`The result is ${callback(firstValue, secondValue)}`);
}

calculator(sum, 1, 3);
// "The result is 4"

calculator(multiply, 2, 5);
  // "The result is 10"