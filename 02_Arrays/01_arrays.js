// array

const myArr = [0,1,2,3,4,5]
const myHeros = ["iron man","cap america"]

const myArr2= new Array(1,2,3,4)

// console.log(myArr[1]);



//Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop() // no value given the "the last value " is poped outof the array


//same like push and pop
// myArr.unshift(9) // inserts 9 to the start position like on in=dx 0 all the array is shifted by 1 position
// myArr.shift()  // here 9 is deleted pop from the starting point


// console.log(myArr.includes(1))
// console.log(myArr.indexOf(5))

// const newArr = myArr.join()

// console.log(myArr); // now array chenged inserted 6
// console.log(newArr); //changed to string
// console.log(typeof(newArr));





//Slice and Splice

console.log("A", myArr);

const myn1 = myArr.slice(1,3); //prints fromm 1 to <3

console.log(myn1)
console.log("B", myArr);

const myn2 = myArr.splice(1,3); // prints from 1 to 3
console.log("C", myArr);// C [ 0, 4, 5 ]  but in splice it removes those element and then print
console.log(myn2)
