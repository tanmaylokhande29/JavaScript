const myn2 = myArr.splice(1,3);   // removes 3 elements starting from index 1
console.log("C", myArr);          // [0,4,5] → original array changed
console.log(myn2);                // [1,2,3] → removed elements returned