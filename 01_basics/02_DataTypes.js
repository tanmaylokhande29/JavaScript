"use strict";
// "use strict" → forces JavaScript to run in strict mode (treats code as modern JS, catches errors early)


// =====================
// Example: simple operations
// =====================

// alert(3+3)
// This will not work in Node.js (works only in browsers)
// Because Node.js does not have "alert()" function

console.log(3+3);     // 6
console.log("tanmay"); // string output


// =====================
// Data types
// =====================

let name = "tanmay";       // string
let age = 21;              // number
let isLoggedIn = false;    // boolean


// number → can hold values up to 2^53 safely
// bigint → for very large numbers
// string → written in " " or ' '
// boolean → true / false
// null → standalone value (intentionally empty)
// undefined → variable declared but not assigned
// symbol → unique identifier (used in advanced cases)


// =====================
// typeof operator → check type of a value
// =====================

console.log(typeof "tanmay");   // string
console.log(typeof age);        // number


// Special cases
console.log(typeof null);       // object   (bug in JavaScript design, historical issue)
console.log(typeof undefined);  // undefined
