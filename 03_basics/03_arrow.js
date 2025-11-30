// ---------------------------- OBJECT + THIS ----------------------------
const user = {
  username: "tanmay",
  price: 999,

  welcomeMessage: function(){
    // `this` refers to the CURRENT object (user)
    console.log(`${this.username}, welcome to website`)
     console.log(this)  // would show entire object
  }
}

// user.welcomeMessage()           // "tanmay, welcome to website"
// user.username = "sam"           // update username
// user.welcomeMessage()           // "sam, welcome to website"

console.log(this);   // In Node → {} (empty object)
// In browser → `this` refers to window object



// // ---------------------------- THIS IN NORMAL FUNCTION ----------------------------
// function chai(){
//   let username = "tanmay"
//   console.log(this.username);
//   // `this` does NOT work inside normal functions for local variables
// }


// // ---------------------------- THIS IN FUNCTION EXPRESSION ----------------------------
// const chai = function(){
//   let username = "tanmay"
//   console.log(this.username);
//   // Again undefined → `this` does not access local variable
// }
console.log();






// // ---------------------------- THIS IN ARROW FUNCTION ----------------------------
// const chai = () => {
//   // Arrow functions DO NOT have their own `this`
//   // They borrow `this` from surrounding scope
//   // In Node environment → {} (empty)
// }
// chai()



// // ---------------------------- ARROW FUNCTION EXAMPLES ----------------------------

// // 1. Normal arrow function
// // const addtwo = (num1, num2) => {
// //   return num1 + num2
// // }

// // // 2. Implicit return (no return keyword)
// // const addtwo = (num1, num2) => num1 + num2

// // // 3. Implicit return with parentheses
// // const addtwo = (num1, num2) => (num1 + num2)


// // ---------------------------- RETURNING AN OBJECT ----------------------------
// // If you want to return an object directly from an arrow function,
// // you MUST wrap it inside parentheses () because {} is normally taken as function body.

// const addtwo = (num1, num2) => ({ username: "tanmay" })
// // returned ALWAYS: { username: "tanmay" }

// console.log(addtwo(4,5));
// /*
// OUTPUT:
// { username: 'tanmay' }
// */
