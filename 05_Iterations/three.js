// for of loop mostly used in arrays

// [" "," "," "]
// [ {} , {} , {} ]

const arr = [1,2,3,4,5]

for (const num of arr ) {
    // console.log(num);
}


const greetings = "hello world" 

for (const greet of greetings ) {
    // if (greet === " ") continue; // skip the space
    // if (greet === " ") break; // stops at the first space
    console.log(greet); // prints space too
}

//maps

const map = new Map()
map.set('IN','India')
map.set('USA','United States of America')
map.set('FR','France')
map.set('IN','India')

console.log(map);//know for unique values also follows the order

for (const [key,value] of map) {
    console.log(key , "->" , value);
    // console.log(value);
}

// const myObject ={    //doesnt work for objects

//     Game1: 'NFS',
//     Game2: 'Spiderman'
// }

// for (const [key, value] of myObject) {
//     // console.log(key,':-',value);

// }