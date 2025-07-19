// let score = "3"

// console.log(typeof (score));
// console.log(typeof score);


// let valueInNumber = Number (score)
// console.log(typeof (valueInNumber)); // string to number conversion done here !!!



// // different input

// console.log(valueInNumber); // by this way we can see that the valueInNUmber stores only intiger values 
                            
// let score1 = "33abc"// and once passed string like 33abc it gives NaN 
// console.log(typeof score1);

// let valueInNumber1 = Number (score1)

// console.log(typeof (valueInNumber1));//here its converted to number even if theres a abc in it but its given as number so its taken as an int value 

// console.log(valueInNumber1); //NaN 




                            
// let score2 = null                           // and once passed string like 33abc it gives NaN 
// console.log(typeof score2);

// let valueInNumber2 = Number (score2)

// console.log(typeof (valueInNumber2));       //here its converted to number even if theres a abc in it but its given as number   so its taken as an int value 

// console.log(valueInNumber2);




// let score3 = undefined                           // and once passed string like 33abc it gives NaN 
// console.log(typeof score3);

// let valueInNumber3 = Number (score3)

// console.log(typeof (valueInNumber3));       //here its converted to number even if theres a abc in it but its given as number   so its taken as an int value 

// console.log(valueInNumber3);





// let score4 = true                         // and once passed string like 33abc it gives NaN 
// console.log(typeof score4);

// let valueInNumber4 = Number (score4)

// console.log(typeof (valueInNumber4));       //here its converted to number even if theres a abc in it but its given as number   so its taken as an int value 

// console.log(valueInNumber4);

// "33 "  => 33
// "33abc" => NaN
// true => false => 0


// let isLoggedIn = 1;                  //true
// let isLoggedIn = 0;                  //false
// let isLoggedIn = "tanmay"            //true
// let isLoggedIn = ""                     //false


// let booleanIsLOggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLOggedIn)



/*
1 => true ; 0 => false
" " => false
"tanmay"=> true
*/



let someNumber = 33

let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof(stringNumber));