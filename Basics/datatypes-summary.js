//Primitive Data Types

// 7 Types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scorevalue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;



let id = Symbol('123');
let anotherId = Symbol('123')

console.log(id===anotherId);
console.log(id,anotherId)

//Refernce (Non Primituve)

//Array , Objects, Functions

const heros = ["Shaktiman", "Badman","Iron man"];

let myObj = {
     name : "Somesh",
     age : 22

}

const myFunction = function () {
    console.log("Hello World")
}

// https://262.ecma-international.org/5.1/#sec-11.4.3
