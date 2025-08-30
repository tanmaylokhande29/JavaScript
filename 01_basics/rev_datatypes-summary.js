// ---------------- Primitive Data Types ----------------
// Total 7 Primitive types in JavaScript
/*
1. String      → sequence of characters
2. Number      → all numbers (no int/float distinction, all are Number type)
3. Boolean     → true/false values
4. Null        → intentional absence of value (NOT zero)
5. Undefined   → variable declared but not assigned any value
6. Symbol      → used to create unique identifiers
7. BigInt      → very large integers (denoted with 'n' at the end)
*/

// Number type examples
const score = 100;
const ScoreValue = 100.33;
// Even though one looks like integer and one like float,
// both are of type "number" in JavaScript

// Boolean type
const isLoggedIn = false;

// Null type
const outsideTemp = null;
// Null represents an empty value (deliberate no-value)

// Undefined type
let userEmail;
// Variable declared but not initialized → undefined
let useremail = undefined;
// Same as above, explicitly set to undefined

// Symbol type
const id = Symbol('123');
const Anotherid = Symbol('123');
console.log(id === Anotherid);
// Even if both symbols have same description, they are UNIQUE → false

// BigInt type
const BigNumber = 321654987546412364654n;
// BigInt numbers are written with 'n' at the end


// ---------------- Reference (Non-Primitive) Data Types ----------------
/*
These are not primitive, instead stored as references in memory:
1. Arrays
2. Objects
3. Functions

typeof always returns "object" for these (except functions which return "function")
*/

// Array
const heros = ["shaktiman", "naagraj", "doga"];

// Object
let myobj = {
    name: "hitesh",
    age: 21,
};

// Function
const myFunction = function () {
    console.log("hello world");
};


// ---------------- typeof Operator ----------------
// typeof is used to check data type of a variable

console.log(typeof BigNumber);     // "bigint"
console.log(typeof outsideTemp);   // "object" (special case: typeof null = object)
console.log(typeof ScoreValue);    // "number"

console.log(typeof myFunction);    // "function" (internally still object type → called "object function")
console.log(typeof heros);         // "object"
console.log(typeof myobj);         // "object"
