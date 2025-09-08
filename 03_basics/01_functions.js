// function sayMyName(){
//   console.log("T");
//   console.log("A");
//   console.log("N");
//   console.log("M");
//   console.log("A");
//   console.log("Y");
// }
//   sayMyName()


// function addTwoNumbers(number1,number2){
//    console.log(number1 + number2);
//  }

function addTwoNumbers(number1,number2){

  // let result = number1 + number2
  // return result
  //or
  return number1 + number2

  }

const result = addTwoNumbers(3,4)

// console.log("result: ", result);

function loginUserMessage(username="sam"){ // demo value as sam optional hai

  if (username === undefined) //or (!usernmae)
   {
    console.log("please enter a username")
    return
  }

  return `${username} just logged in` //returns the value doesnt print

}
// console.log(loginUserMessage("tanmay")); //tanmay just logged in

// console.log(loginUserMessage()); //undefined just logged in

// function calculateCarPrice(...num1){ //   ... is a rest operator
//   return num1
// }
// console.log(calculateCarPrice(200,400,500,200,5000)); //[ 200, 400, 500, 200, 5000 ]


function calculateCarPrice(val1,val2,...num1){ //val1=200 , val2=400
  return num1
}
console.log(calculateCarPrice(200,400,500,200,5000)); //[ 500, 200, 5000 ]

const user ={
  username: "tanmay",
  price: 199
}

function handleObject(anyobject){
  console.log(`Usernmae is ${anyobject.username} and price is ${anyobject.price}`);

}

// handleObject(user)
handleObject({
  username: "sam",
  price: 399
})


const myNewArray =[200,300,400,500]

function returnSecondvalue(getarray){
  return getarray[1]
}
// console.log(returnSecondvalue(myNewArray))
console.log(returnSecondvalue([200,300,400,50,600]))
