const userEmail =[]

if(userEmail){
  // console.log("Got User Email");

} else {
  console.log(" Dont have user Email ");
}

/*

fasly  values

false = 0,-0, Bigint = 0b , null, undefined , nan

else all
truthy values

"0" , 'fasle'," ", [] , {} , function(){}



*/
// if(userEmail.length===0){ //for []
//   console.log("array is empty");

// }

const emptyobj ={}

if (Object.keys(emptyobj).length===0) {
  // console.log("object is empty");

}

// Nullish Coalescing Operator (??): null undefined

let val1;
val1 = 5 ?? 10



// console.log(val1);

//terniary operator

// condition ? true : false

const iceTea = 100

iceTea <= 80 ? console.log("less than 80"): console.log("more than 80");
 