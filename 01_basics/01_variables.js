// =====================
// JavaScript Variables & Constants Notes
// =====================

// const → constant (value cannot be reassigned)
const accountId = 14553;
// accountId = 2  // ❌ Not allowed because const values cannot change


// let → block-scoped variable (preferred in modern JS)
let accountEmail = "tanmay@2964";
// can be updated later


// var → function-scoped (old way, avoid using it)
var accountPassword = "12345";


// If no keyword is used → becomes global (not recommended)
accountCity = "Nashik";

console.log(typeof(accountCity));  // string


// Variable declared but not initialized → value is "undefined"
let accountState;
console.log(accountState);  // undefined



// =====================
// Updating variables
// =====================
accountEmail = "hc@hc.com";          // allowed (let)
accountPassword = "21212121";        // allowed (var)
accountCity = "mumbai";              // allowed (no keyword/global)


// =====================
// Checking values
// =====================
console.log(accountId);  // prints 14553 (const not changed)


// =====================
// Printing multiple values in table format
// =====================
console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);
// displays values in a tabular format


/*
Important Notes:
1. Use "const" when value should not change.
2. Use "let" for variables that can change (modern & safe).
3. Avoid "var" because of block-scope and functional-scope issues.
4. If a variable is declared but not initialized → default value is undefined.
5. console.table() is useful for debugging multiple values at once.
*/
