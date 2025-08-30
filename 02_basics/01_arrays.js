// =====================
// 📒 JavaScript Arrays Notes
// =====================

// ✅ Creating arrays
const myArr = [0,1,2,3,4,5]             // normal array
const myHeros = ["iron man","cap america"] // string array
const myArr2= new Array(1,2,3,4)        // another way (not used much)

// console.log(myArr[1]);  // arrays are 0-indexed → prints 1


// =====================
// ✅ Array Methods (Insert & Remove)
// =====================

// myArr.push(6)   // adds element at the END
// myArr.push(7)   // adds 7 at the END
// myArr.pop()     // removes LAST element (no value needed)


// myArr.unshift(9) // adds element at the START (index 0)
// myArr.shift()    // removes FIRST element

// ⚠️ push/pop are faster than unshift/shift (because shifting takes time)


// =====================
// ✅ Searching in Arrays
// =====================

// console.log(myArr.includes(1))  // true → checks if element exists
// console.log(myArr.indexOf(5))   // 5 → returns index of element (if not found → -1)


// =====================
// ✅ Convert Array to String
// =====================

// const newArr = myArr.join()
// console.log(newArr)           // "0,1,2,3,4,5"
// console.log(typeof newArr)    // string


// =====================
// ✅ Slice vs Splice
// =====================

// Slice → copies part of array, DOES NOT change original
console.log("A", myArr);          // A [0,1,2,3,4,5]
const myn1 = myArr.slice(1,3);    // copy elements from index 1 to <3
console.log(myn1);                // [1,2]
console.log("B", myArr);          // original array unchanged → [0,1,2,3,4,5]

// Splice → removes elements, CHANGES original array
const myn2 = myArr.splice(1,3);   // removes 3 elements starting from index 1
console.log("C", myArr);          // [0,4,5] → original array changed
console.log(myn2);                // [1,2,3] → removed elements returned


// =====================
// 📌 Quick Revision
// =====================
// push → add at END
// pop → remove from END
// unshift → add at START
// shift → remove from START
// includes → check existence
// indexOf → find index
// join → convert array to string
// slice → copy (no change in original)
// splice → remove/modify (changes original)
