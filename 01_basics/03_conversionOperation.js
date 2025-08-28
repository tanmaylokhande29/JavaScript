 let score = "3"

// console.log(typeof (score));
// console.log(typeof score);


let valueInNumber = Number (score)
// console.log(typeof (valueInNumber)); // string to number conversion done here !!!



// // different input

// console.log(valueInNumber);// by this way we can see that the valueInNUmber stores only intiger values
// console.log(typeof (valueInNumber)); //displaying the type change str to int

// let score1 = "33abc"// and once passed string like 33abc it gives NaN
// console.log(typeof score1);

// let valueInNumber1 = Number (score1)

// console.log(typeof (valueInNumber1));//here its converted to number even if theres a abc in it but its given as number so its taken as an int value if u remove abc it will give output as 33

// console.log(valueInNumber1); //NaN





// let score2 = null                           // and once passed string like 33abc it gives NaN
// console.log(typeof score2);   // type given is Object

// let valueInNumber2 = Number (score2)

// console.log(typeof (valueInNumber2));       //here its converted to number even if theres a abc in it but its given as number   so its taken as an int value

// console.log(valueInNumber2);     //gives 0 has the answer as null = 0 ;




let score3 = undefined                           // and once passed string like 33abc it gives NaN
console.log(typeof score3);

let valueInNumber3 = Number (score3)

console.log(typeof (valueInNumber3));       //here its converted to number even if theres a abc in it but its given as number   so its taken as an int value

console.log(valueInNumber3);





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
// let isLoggedIn = ""                  //false


// let booleanIsLOggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLOggedIn)



/*
1 => true ; 0 => false
" " => false
"tanmay"=> true
*/



// let someNumber = 33

// let stringNumber = String(someNumber)
// console.log(stringNumber);
// console.log(typeof(stringNumber));



/*------------------------------------------OPERATIONS-------------------------------------------------------------*/

// let value = 3
// let negValue = - value
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);  //power
// console.log(2/3);
// console.log(10%3);  // reaminder



                                        //adition of strings
// let str1 = " hello"
// let str2 = " Tanmay"
// console.log(str1+str2);
// // or

// let str3 = str1 +str2
// console.log(str3);


// console.log(1 +"2");    //12
// console.log("1" + 2);   //12
// console.log("1" +"2");   //12
// console.log(1 + 1 +"2"); // 22
// console.log("1" + 1 +2);   //112


// console.log((3 + 2) * 5 % 3 );




// // should not be used
// console.log(true);  //true
// console.log(+true);  //1 when incremented true a "boolean" who works as a 1 get an incrementation
// console.log(+"");   //1


// let  numCounter = 100
// numCounter ++;
// console.log(numCounter);

