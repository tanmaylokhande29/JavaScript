// strings can be desplayed using "--" or '--'in js
// "Hello" + "world" = Hello world


const name = "tanmay"
const repoCount = 50

console.log(name + repoCount + " value");  // not recommneded out dated

// `` thisare called ahs backticks



// use this method
console.log(`hello my name is ${name} and my repo count is ${repoCount}`);//  `` string interpolation ...creating placeholders
// we can edit it on the way

const gameName = new String('tanmay-sl')
// String {'tanmay'}
// 0: "t"
// 1: "a"
// 2: "n"
// 3: "m"
// 4: "a"
// 5: "y"
// length: 6
// [[Prototype]]: String
// [[PrimitiveValue]]: "tanmay"

console.log(gameName[0]);//refer the above example for understanding
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());// from the rev-memory -> string is a primitive data so the data is staticaly changed here means no real data was harmned here

console.log(gameName.charAt("a"));//charAt("a") → expects a number, but you gave a string "a".

/* JavaScript tries to convert "a" to a number:

charAt("a") → expects a number, but you gave a string "a".
JavaScript tries to convert "a" to a number:
    Number("a") → NaN  // Not a Number
So it's the same as writing:
    gameName.charAt(NaN)
When charAt() gets NaN, it treats it as 0.

Therefore, gameName.charAt(NaN) → gameName.charAt(0)

gameName.charAt(0) → "T" (because "T" is the first character in "Tanmay")
*/

console.log(gameName.charAt(2)); // output: "n"


// char to num
console.log(gameName.indexOf('a'));


const newstring = gameName.substring(0,4)
console.log(newstring);


const anotherString = gameName.slice(-8,4) //it becomes (0,4)because -8 is before the string starts
console.log(anotherString)
