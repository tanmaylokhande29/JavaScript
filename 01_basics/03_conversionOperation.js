let score = "3"

console.log(typeof (score));
console.log(typeof score);


let valueInNumber = Number (score)
console.log(typeof (valueInNumber)); // string to number conversion done here !!!



// different input

console.log(valueInNumber); // by this way we can see that the valueInNUmber stores only intiger values 
                            
let score1 = "33abc"// and once passed string like 33abc it gives NaN 
console.log(typeof score1);

let valueInNumber1 = Number (score1)
console.log(typeof (valueInNumber1));
console.log(valueInNumber1);