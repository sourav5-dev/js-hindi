// Primitive

// 7 types : String, Number, Boolean, Null, Undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;
 
const id = Symbol('123')

const anotherId = Symbol ('123')

// console.log(id == anotherId)

// Reference (Non-Primitive)

// Array, Objects, Functions


const myFunction = function(){
    console.log("Hello World");
}


// Stack (Primitive), Heap (Non-Primitive)

let myName = "Sourabh Kaushik"
let anotherName = myName
anotherName = "Kaushik Sourabh"
console.log(anotherName)
console.log(myName);
