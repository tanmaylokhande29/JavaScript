// =====================
// 📒 JavaScript Array Advanced Notes
// =====================

const marvel_heros = ["thor", "ironman", "spiderman"];
const dc_heros = ["superman", "flash", "batman"];


// =====================
// ✅ Pushing one array into another
// =====================
marvel_heros.push(dc_heros);
// console.log(marvel_heros);
Output: [ 'thor', 'ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]

// ⚠️ Here dc_heros is added as a single element (nested array)

// console.log(marvel_heros[3][1]);

// 3 → represents dc_heros array (4th element)
// [1] → second element inside dc_heros → "flash"


// =====================
// ✅ concat()
// =====================
// concat merges arrays into a new one (does not change original)
const allheros = marvel_heros.concat(dc_heros);
console.log(allheros);
// Output: [ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]


// =====================
// ✅ Spread Operator (...)
// =====================
// Spread operator does the same as concat but is more modern + flexible
const allNewHeros = [...marvel_heros, ...dc_heros];
console.log(allNewHeros);


// =====================
// ✅ flat() → Flatten nested arrays
// =====================
const another_Array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];

// flat(Infinity) → removes all nesting levels
// flat(depth) → you can also give a number (e.g., flat(1), flat(2))
const real_another_array = another_Array.flat(Infinity);
console.log(real_another_array);
// Output: [1,2,3,4,5,6,7,6,7,4,5]


// =====================
// ✅ Array Checking & Conversion
// =====================

// Array.isArray(value) → checks if value is an array
console.log(Array.isArray("tanmay"));   // false (string, not array)

// Array.from(value) → converts iterable into array
console.log(Array.from("tanmay"));      // [ 't','a','n','m','a','y' ]

// ⚠️ Special case
console.log(Array.from({name: "tanmay"}));
// [] → because object is not iterable, it doesn’t know how to convert


// =====================
// ✅ Array.of() → create array from values
// =====================
let score1=100;
let score2=200;
let score3=300;

console.log(Array.of(score1,score2,score3));
// Output: [100,200,300]
