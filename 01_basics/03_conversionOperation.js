// =====================
// JavaScript Type Conversion & Operations
// =====================

let score = "3"

// typeof → tells the data type
// console.log(typeof(score));   // string

let valueInNumber = Number(score);  // convert string "3" to number 3
// console.log(typeof valueInNumber); // number
// console.log(valueInNumber);        // 3


// =====================
// Converting different inputs
// =====================

// Case 1: "33abc" → cannot fully convert to number
let score1 = "33abc"
let valueInNumber1 = Number(score1)
// console.log(typeof valueInNumber1); // number
// console.log(valueInNumber1);        // NaN (Not a Number)


// Case 2: null → converted to 0
let score2 = null
let valueInNumber2 = Number(score2)
// console.log(typeof valueInNumber2); // number
// console.log(valueInNumber2);        // 0


// Case 3: undefined → converted to NaN
let score3 = undefined
let valueInNumber3 = Number(score3)
// console.log(typeof valueInNumber3); // number
// console.log(valueInNumber3);        // NaN


// Case 4: boolean → true = 1, false = 0
let score4 = true
let valueInNumber4 = Number(score4)
// console.log(typeof valueInNumber4); // number
// console.log(valueInNumber4);        // 1


// =====================
// Summary of conversions
// =====================
// "33"     => 33
// "33abc"  => NaN
// true     => 1
// false    => 0
// null     => 0
// undefined=> NaN


// =====================
// Boolean Conversion
// =====================
// let isLoggedIn = 1;        // true
// let isLoggedIn = 0;        // false
// let isLoggedIn = "tanmay"; // true
// let isLoggedIn = "";       // false

// let booleanIsLoggedIn = Boolean(isLoggedIn);
// console.log(booleanIsLoggedIn);

// Rules:
// 1 => true ; 0 => false
// "" (empty string) => false
// "tanmay" (non-empty string) => true


// =====================
// Number to String Conversion
// =====================
// let someNumber = 33
// let stringNumber = String(someNumber)
// console.log(stringNumber);         // "33"
// console.log(typeof stringNumber);  // string


// =====================
// Basic Arithmetic Operations
// =====================
let value = 3
let negValue = -value;    // -3

// console.log(2+2);   // addition
// console.log(2-2);   // subtraction
// console.log(2*2);   // multiplication
// console.log(2**3);  // exponentiation → 2^3 = 8
// console.log(2/3);   // division
// console.log(10%3);  // modulus (remainder) → 1


// =====================
// String Operations
// =====================
let str1 = " hello"
let str2 = " Tanmay"
let str3 = str1 + str2
// console.log(str3);  // " hello Tanmay"


// Mixing numbers and strings
// console.log(1 +"2");      // "12" (number + string → string)
// console.log("1" + 2);     // "12"
// console.log("1" +"2");    // "12"
// console.log(1 + 1 +"2");  // "22" (first adds numbers → then string)
// console.log("1" + 1 + 2); // "112" (string first → everything becomes string)


// =====================
// Precedence Example
// =====================
// console.log((3 + 2) * 5 % 3 );
// (3+2)=5 → 5*5=25 → 25%3=1


// =====================
// Special Cases (not recommended)
// =====================
// console.log(true);   // true
// console.log(+true);  // 1 (true converted to number)
// console.log(+"");    // 0 (empty string converted to number)


// =====================
// Increment Example
// =====================
// let numCounter = 100
// numCounter++;  // 101
// console.log(numCounter);
