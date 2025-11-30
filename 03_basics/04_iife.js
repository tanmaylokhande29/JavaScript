// ------------------------------ IIFE ------------------------------
// IIFE = Immediately Invoked Function Expression
// Meaning: The function runs IMMEDIATELY as soon as it is defined.
// We do NOT call it separately like chai().
// Syntax rule: ( function definition ) ( execution )
// Also known as: ()()

// ----------------- Named IIFE -----------------
(function chai() {
  // This function has a name "chai"
  console.log(`DB connected`);
})();
// Explanation:
// 1st () → wraps the function so JS treats it as an expression (not declaration)
// 2nd () → immediately executes it



// ----------------- Unnamed (Arrow) IIFE -----------------
((name) => {
  console.log(`DB Connected to ${name}`);
})('tanmay');
// Here the function has NO name (arrow function IIFE)
// We pass "tanmay" directly during execution



// ----------------- Another Arrow IIFE -----------------
((hello) => {
  console.log(`i am ${hello} tanmay lokhande`);
})('Helllloo!');
// Same pattern: function inside () runs immediately with provided argument
