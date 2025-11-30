// -----------------------------------------------------------------------------
// ⭐ SCOPE IN JAVASCRIPT
// -----------------------------------------------------------------------------
// {} → block scope
// let & const → block-scoped
// var → function-scoped (NOT block-scoped) → creates PROBLEMS

var c = 300;   // var → global/function scoped
let a = 100;   // let → block scoped

if (true) {
  let a = 10;      // new 'a' ONLY inside this block
  const b = 20;    // also only inside this block
  var c = 30;      // var gets UPDATED in the outer/global scope

  console.log("inner:", a);    // prints 10
}

console.log(a);   // prints 100 → outer 'a'
// console.log(b); // ❌ ERROR → b exists only inside block

console.log(c);   // prints 30 (var got overwritten inside the block)
// This shows the drawback of var → leaks out of blocks


// -----------------------------------------------------------------------------
// ⭐ NESTED SCOPES & LEXICAL SCOPE
// -----------------------------------------------------------------------------
// Inner functions can access variables from outer functions (lexical scope).
// Outer functions CANNOT access inner function variables.

function one() {
  const username = "tanmay";

  function two() {
    const website = "youtube";
    // console.log(username);   // ✔ can access outer scope
  }
  // console.log(website);     // ❌ ERROR → inner variable not accessible here


  two();
}
one();


// -----------------------------------------------------------------------------
// ⭐ NESTED IF BLOCK SCOPES
// -----------------------------------------------------------------------------

if (true) {
  const username = "tanmay";

  if (username === "tanmay") {
    const website = " youtube";
    console.log(username + website); // ✔ works (both in scope)
  }

  // console.log(website);  // ❌ ERROR → website is inside inner block only
}

// console.log(username);    // ❌ ERROR → username only inside the outer if block


// -----------------------------------------------------------------------------
// ⭐ FUNCTION DECLARATION vs FUNCTION EXPRESSION
// -----------------------------------------------------------------------------
// Important difference → HOISTING

// 1️⃣ Function Declaration (Hoisted)
function addone(num) {
  return ( num + 1);
}
console.log(addone(5));      // ✔ works → function is hoisted


// 2️⃣ Function Expression (NOT fully hoisted)
const addTwo = function(num) {
  return num + 2;
};
console.log(addtwo(5));      // ✔ works ONLY after the line is executed


// -----------------------------------------------------------------------------
// ⭐ HOISTING NOTES
// -----------------------------------------------------------------------------
// Function declarations are hoisted completely → you can call them before they are written.
// Function expressions (functions stored inside variables) are NOT hoisted fully.
// For function expressions:
//   - variable is hoisted (undefined)
//   - function body is NOT hoisted
// So calling addTwo() before its definition → ❌ ERROR

/*
Important Notes:

1. let & const → block scoped (stay inside {}).
2. var → function scoped (leaks outside blocks) → avoid using it.
3. Inner functions/blocks can access outer variables, not the other way.
4. Accessing a variable outside its block → ReferenceError.
5. Function declarations are hoisted; function expressions are not.
*/
