const userEmail = []

// In JavaScript, ANY non‑empty string is considered truthy.
// So this condition becomes TRUE.
if (userEmail) {
  console.log("Got User Email");
} else {
  console.log("Dont have user Email");
}



// --------------------------------------------------------------------
// FALSY VALUES in JavaScript
/*
Values that behave as FALSE when used in conditions:

1. false
2. 0
3. -0
4. 0n   (BigInt zero)
5. ""   (empty string)
6. null
7. undefined
8. NaN

If any of these are inside an if() → condition becomes false.
*/



// --------------------------------------------------------------------
// TRUTHY VALUES in JavaScript
/*
Anything that is NOT falsy is truthy.

Common truthy values:

1. "0"        → non‑empty string
2. "false"    → STILL a non‑empty string
3. " "        → space is also a character → truthy
4. []         → empty array is truthy
5. {}         → empty object is truthy
6. function(){} → functions are always truthy
7. any number except 0 → truthy

So if(userEmail) checks whether userEmail is truthy.
*/

// ---------------------------------------------------------
// CHECKING IF ARRAY IS EMPTY
// ---------------------------------------------------------

if (userEmail.length === 0) {   // length === 0 → means empty array/string
  console.log("array is empty");
}
// NOTE: .length only works for strings and arrays, NOT objects



// ---------------------------------------------------------
// CHECKING IF OBJECT IS EMPTY
// ---------------------------------------------------------

const emptyobj = {}

if (Object.keys(emptyobj).length === 0) {
  // Object.keys(emptyobj) → returns array of keys
  // [].length === 0 → means object is empty
  console.log("object is empty");
}



// ---------------------------------------------------------
// NULLISH COALESCING OPERATOR (??)
// ---------------------------------------------------------
/*
?? is used when we specifically want to handle:
null
undefined

It only checks these two values.
If value is null/undefined → it will pick the right side.
Else → it picks the left side. 
*/

let val1;

val1 = 5 ?? 10        // 5 is NOT null/undefined → result = 5
// val1 = null ?? 10  → result = 10
// val1 = undefined ?? 10 → result = 10

console.log(val1);



// ---------------------------------------------------------
// TERNARY OPERATOR
// ---------------------------------------------------------
/*
Syntax:
condition ? true-part : false-part

Used when you want to write short if-else
*/

const iceTea = 100

iceTea <= 80
  ? console.log("less than 80")
  : console.log("more than 80")
// result → "more than 80"
