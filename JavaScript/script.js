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

//! ARRAYS methods
//* concat: ƒusionne 2 tableaux → const mySmoothie = fruits1.concat(fruits2)
// copyWithin: ƒ copyWithin()
// entries: ƒ entries()
// every: ƒ every()
// fill: ƒ fill()
// filter: ƒ filter()
// find: ƒ find()
// findIndex: ƒ findIndex()
// flat: ƒ flat()
// flatMap: ƒ flatMap()
// forEach: ƒ forEach()
//* includes: recherche la présence d'1 élément (True/False) → fruits.includes("Kiwi")
//* indexOf: 1ere position d'un élément (-1 si inexistant) → fruits2.indexOf("dog")
//* join: transf array en string (espacé par - ou autre) → const fruitsString2 = fruits.join("-")
// keys: ƒ keys()
//* lastIndexOf: dernière position d'un élément (-1 si inexistant) → fruits2.lastIndexOf("dog")
//* length: 0 → fruits.length
// map: ƒ map()
//* pop: suppr dernier élément → fruits.pop()
//* push: ajout à la fin → fruits.push("Banana")
// reduce: ƒ reduce()
// reduceRight: ƒ reduceRight()
// reverse: ƒ reverse()
//* shift: suppr le 1er élément → fruits.shift()
// slice: ƒ slice()
// some: ƒ some()
//* sort: ordre alphabétique (! pbm avec les nb) → fruits2.sort() OU si nb → numbers.sort(function(a, b){return a - b;})
// splice: ƒ splice()
// toLocaleString: ƒ toLocaleString()
// toString: ƒ toString()
//* unshift: ajout au début → fruits.unshift('Strawberry')
// values: ƒ values()

//! String interpolation
const name = "Donald Duck";
console.log(`Hello, I'm ${name}`);
console.log(`You can write Js expressions: ${1 + 1}`);
console.log(`You can write Js expressions: ${1 < 1}`);


//! Higher-order function
function sayHello(userName) {
    console.log(`Hello, ${userName}`);
}

function sayWelcome(userName) {
    console.log(`Welcome, ${userName}`);
}

function askUserName(callback) {
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



//! DOM 
//* select element
// un seul élément → const catImage = document.querySelector('.img-cat')
// tous les éléments → const images = document.querySelectorAll('img')
// const title = document.getElementById('title');
// const heading = document.getElementsByTagName('h1');
//
//* Remplacer les images d'une page par les images de chien ::
// const dogsPicture = [
//     "https://random.dog/0c021634-cc90-443e-bedb-6f754fcfb7bc.png",
//     "https://placedog.net/500/280",
//     "https://placedog.net/500/300",
//     "https://placedog.net/500/302",
//     "https://placedog.net/500/305"
// ];
//
// / We create a variable set to the array with all element that match the selector img
// const images = document.querySelectorAll('img');
//
// / We loop as many time as we have img elements
// for (let i = 0; i < images.length; i++) {
//
//     / For each loop turn we change the current image for the corresponding image in the array
//     images[i].src = dogsPicture[i];
// }

//* innerHTML (MODIFIER le contenu d'une balise) → const title = document.querySelector('.title'); title.innerHTML = "Hello, Bob!";

//* createElement (CREER un nouvel élément) → const newCatImage = document.createElement('img'); newCatImage.src = "https://placekitten.com/408/287";

//* appendChild (AJOUTER l'élément passé (newCatImage) à la fin de l'élément sur lequel tu utilises la méthode (body)) → document.body.appendChild(newCatImage);
// autre exemple :
// const myDiv = document.querySelector('.myDiv');
// myDiv.appendChild(myElement);

//* appendChild (Changer la POSITION d'un Élément du DOM) → const secondCat = document.querySelector('#second-cat-img');
// const firstDiv = document.querySelector('#first-div');
// firstDiv.appendChild(secondCat);

//* remove (SUPPR un Élément du DOM) → myElement.remove();

//* classList.add (AJOUTER une classe à un élément) → myElement.classList.add('myClass');
//* classList.remove (SUPPR une classe d'un élément) → myElement.classList.remove('myClass');

//* AddEventListener (méthode qui accepte comme premier paramètre le type d'EVENEMENT, et le second est une FONCTION de callback) → someDiv.addEventListener('click', function(){someDiv.style.backgroundColor = "red";})
// alternative → title.onmouseover = function () {title.style.backgroundColor = "red";}


//* EXERCICE ::
// We create the variables that we set to the DOM elements (todolist is for ul)
const form = document.querySelector("#form");
const inputTodo = document.querySelector("#todoInput");
const todolist = document.querySelector("#todolist");

// Add an anonymous function when you push the button (with the event parameter)
form.onsubmit = function(event) {
    // Prevent the page to reload
    event.preventDefault();
    // We create a variable that we set to a new li node
    const newTodo = document.createElement("li");
    // We add the text to the li
    newTodo.innerHTML = inputTodo.value;
    // We add the li to the ul 
    todolist.appendChild(newTodo);
    // We clear the value of the input
    inputTodo.value = "";
};


//* OBJECT
//* ACCEDER à la propriété d'un objet → apple.color; (OU → apple['color'];)

// exemple ::
// const billyTheCat = {
//     name: "Billy", 
//     color: "Ginger", 
//     favouriteFoods: ["Fish", "Chicken"], 
//     isHungry: false, 
//     meow: function(){
//         console.log("Meoooow")
//     }
// }
// const selectedProperty = prompt("Select a property");
// console.log(billyTheCat[selectedProperty]);

//* AJOUTER une propriété à un object → apple.growsOn = "Trees" ;
//* MODIFIER une propriété → apple.color = "red" ;
//* SUPPR une propriété → delete apple.name;


//* Exemple 
// const  billyTheCat = {
//     name: "Billy", 
//     species: "Cat", 
//     isHungry: true, 
//     feed:function(){
//         if(this.isHungry=false){
//         console.log("Billy n'a pas faim")
//         } else{
//         console.log('Billy a faim')
//         this.isHungry = true
//         }
//     }
// }

// billyTheCat.feed()
// console.log(billyTheCat.isHungry)
