// ---------------------------- IF / ELSE ----------------------------

// const isUserLoggedIn = true
// const temperature = 41

// // Basic if–else condition
// if (temperature === 41) {                 // strict comparison (type + value)
//   console.log("temperature less than 50");
// } else {
//   console.log("temperature greater than 40");
// }

// console.log("execute");


// ---------------------------- BLOCK SCOPE & IF ----------------------------

const score = 200

if (score > 100) {
  const power = "fly"       // block scoped → valid only inside this if block
  console.log(`user power ${power}`)
}
// console.log(`user power ${power}`)   // ❌ Error: power not accessible here



// ---------------------------- IMPLICIT SCOPE ----------------------------
const balance = 1000

// if only one statement → can write in one line (NOT recommended for bigger code)
if (balance > 500) console.log("test");   // implicit scope



// ---------------------------- ELSE IF LADDER ----------------------------
// if (balance < 500) {
//   console.log("less than 500");
// } else if (balance < 750) {
//   console.log("less than 750");
// } else if (balance < 900) {
//   console.log("less than 900");
// } else {
//   console.log("less than 1200");
// }



// ---------------------------- LOGICAL OPERATORS ----------------------------
const userLoggedIn = true
const Debitcard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

// AND (&&) → both conditions must be true
if (userLoggedIn && Debitcard){
  console.log("Allow user to buy course");
}

// OR (||) → at least one condition must be true
if (loggedInFromGoogle || loggedInFromEmail) {
  console.log("logged in");
}
else console.log("logged out");




// ---------------------------- COMPARISON OPERATORS NOTES ----------------------------
/*
<   less than
>   greater than
<=  less than or equal to
>=  greater than or equal to
==  loose comparison (only checks value, not type)
/ !=  loose not-equal
=== strict comparison (checks value + type)
/ !== strict not-equal

Example:
2 == "2"   → true   (type conversion happens)
2 === "2"  → false  (type mismatch)
*/
