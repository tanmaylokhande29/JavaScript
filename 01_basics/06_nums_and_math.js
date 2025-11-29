const score = 400
// A simple number assigned to a variable — here score holds the value 400

// console.log(score);
// Used to print the value of score to the console

const balance = new Number(100)
// Creating a Number object explicitly using the Number constructor (less common in practice)
// console.log(balance);

// console.log(balance.toString().length);

// Converts number to string → "100", then gets length → 3 characters

// console.log(balance.toFixed(2));
// Fixes number to 2 decimal places → returns "100.00" as a string


const constNumber = 123.8966
// A floating point number stored in constNumber

// console.log(constNumber.toPrecision(3))
// Returns number rounded to 3 significant digits → "124"


const hundreds = 1000000
// A large number stored in hundreds

// console.log(hundreds.toLocaleString())
// Converts number to readable string format with commas as per US locale → "1,000,000"

// console.log(hundreds.toLocaleString('en-IN'));
// Converts number to Indian locale format → "10,00,000" (lakhs system)


//************************************* Maths ************************************ */

// console.log(Math);
// Math is a built-in object that provides mathematical functions and constants

console.log(Math.abs(-4));
// Converts negative number to positive → returns 4

console.log(Math.abs(4));
// Positive remains positive → returns 4

console.log(Math.round(4.49));
// Rounds to nearest integer → 4

console.log(Math.round(4.6));
// Rounds to nearest integer → 5

// console.log(Math.ceil(4.2));
// Rounds up to next integer → 5

// console.log(Math.floor(4.9));
// Rounds down to previous integer → 4

// console.log(Math.min(4,3,6,8))
// Finds and returns the smallest number → 3

// console.log(Math.max(4,3,6,8))
// Finds and returns the largest number → 8



// console.log(Math.random());
// Generates a random decimal number between 0 (inclusive) and 1 (exclusive)

console.log((Math.random()*10) + 1);
// Multiplies the random number by 10 → gets range 0-10, adds 1 to avoid 0 → 1 to 11 (exclusive)

console.log(Math.floor(Math.random()*10) + 1);
// Gets a random integer from 1 to 10 (inclusive) using floor to round down decimal


const min = 10
const max = 20

// console.log(Math.floor(Math.random() * (max - min + 1)) + min);

// Formula to generate a random integer between min and max (both inclusive)
// (max - min + 1) ensures correct range size
// Math.random() * range gives a number between 0 and range
// Math.floor() rounds it down, then adding min shifts it into the desired range
