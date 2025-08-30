// -------------------- STRING BASICS --------------------
// Strings can be written using "" or ''
// Example: "Hello" + "World" = "HelloWorld"

const name = "tanmay"
const repoCount = 50

console.log(name + repoCount + " value");
// ❌ Outdated concatenation style → avoid

// ✅ Modern way: Backticks (``) → Template Literals (Interpolation)
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);
// Easy to read, can add variables inside ${}


// -------------------- STRING OBJECT --------------------
const gameName = new String('tanmay-sl-com')
// It’s like an object wrapper around string with extra methods
// Output looks like:
// String {'tanmay-sl-com'}
// 0: "t"
// 1: "a"
// ...
// length: 13

console.log(gameName[0]);        // "t" → access by index
console.log(gameName.__proto__); // shows String prototype methods


// -------------------- STRING PROPERTIES --------------------
console.log(gameName.length);       // 13
console.log(gameName.toUpperCase()); // "TANMAY-SL-COM"
// ⚠️ Note: Original string is NOT changed (strings are immutable)


// -------------------- CHARACTERS & INDEX --------------------
console.log(gameName.charAt(2));    // "n"
// If you pass string inside charAt("a"), JS converts it to NaN → treated as 0
// So gameName.charAt("a") = gameName.charAt(0) = "t"

console.log(gameName.indexOf('a')); // 1 (first position of 'a')


// -------------------- SUBSTRING vs SLICE --------------------
const newstring = gameName.substring(0, 4)
console.log(newstring);             // "tanm"
// substring(start, end) → takes from index 0 to 3

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);         // "tanm"
// slice allows negative index (starts from end)


// -------------------- TRIM (remove spaces) --------------------
const newStringOne = "    tanmay    "
console.log(newStringOne);          // "    tanmay    "
console.log(newStringOne.trim());   // "tanmay"


// -------------------- REPLACE & INCLUDES --------------------
const url = "https://Tanmay.com/tanmay%20lokhande"
console.log(url.replace('%20','-')); // "https://Tanmay.com/tanmay-lokhande"

console.log(url.includes('tanmay')); // true
console.log(url.includes('gmail'));  // false


// -------------------- SPLIT (string → array) --------------------
console.log(gameName.split('-'));   // ["tanmay", "sl", "com"]

