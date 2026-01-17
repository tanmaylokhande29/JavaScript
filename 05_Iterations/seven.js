const myNumbers = [1,2,3,4,5,6,7,8,9,10]

// ---------------------------------------------------------
// MAP → creates a NEW array by transforming each value
// Example: add 10 to each number

// const newNumber = myNumbers.map((num) => num + 10)
// console.log(newNumber);



// ---------------------------------------------------------
//? METHOD CHAINING (VERY IMPORTANT)
// ---------------------------------------------------------
/*
You can chain multiple array methods because:
- map() returns a NEW array
- filter() returns a NEW array
- so we can keep chaining them

Steps below:
1. num * 10  → multiply each number by 10
2. num + 1   → add 1 to each value
3. filter num >= 50 → keep only values >= 50
*/

const newNums = myNumbers
                .map((num) => num * 10)   // Step 1: multiply
                .map((num) => num + 1)    // Step 2: add 1
                .filter((num) => num >= 50)  // Step 3: filter

console.log(newNums)

/*
BREAKDOWN:

Original: [1,2,3,4,5,6,7,8,9,10]

After .map(num * 10):
[10,20,30,40,50,60,70,80,90,100]

After .map(num + 1):
[11,21,31,41,51,61,71,81,91,101]

After filter num >= 50:
[51,61,71,81,91,101]

So final result:
[51, 61, 71, 81, 91, 101]
*/
