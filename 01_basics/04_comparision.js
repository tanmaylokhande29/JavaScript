// =====================
// JavaScript Comparisons & Equality
// =====================

// Basic comparisons
// console.log(2 > 1);   // true
// console.log(2 >= 1);  // true
// console.log(2 < 1);   // false
// console.log(2 == 1);  // false
// console.log(2 != 1);  // true


// =====================
// Type conversion in comparisons
// =====================
// In JS, when comparing different types, it tries to convert them
// console.log("2" > 1);   // true ("2" is converted to number → 2 > 1)
// console.log("02" > 1);  // true ("02" converted to 2 → 2 > 1)


// =====================
// null in comparisons
// =====================
// These are confusing cases → avoid doing this in practice
// console.log(null > 0);    // false
// console.log(null <= 0);   // true
// console.log(null >= 0);   // true
// console.log(null == 0);   // false

// Why?
// - Comparisons (<, >, <=, >=) convert null to 0
// - Equality (==) does NOT convert null to 0


// =====================
// undefined in comparisons
// =====================
// console.log(undefined == 0);  // false
// console.log(undefined < 0);   // false
// console.log(undefined > 0);   // false

// Why? undefined is not comparable with numbers


// =====================
// Strict check (===)
// =====================
// ==  → checks only values (does type conversion)
// === → checks both value AND type (no conversion)

// console.log("2" == 2);   // true  ("2" converted to number)
// console.log("2" === 2);  // false (string vs number → different types)
