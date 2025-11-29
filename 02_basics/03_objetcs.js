// singleton -> when object is created from constructor it is SINGLE instance
// Example: Object.create()
// (For now, we use object literals, which are NON-singleton i.e. multiple copies possible)

// creating a Symbol (unique key, not colliding with normal strings)
const mySym = Symbol("key1");

// object literal (most common way to create objects in JS)
const JsUser = {
  name: "Tanmay",
  "full name": "Tanmay Lokhande", // key with spaces -> must be in quotes
  [mySym]: "myKey1", // Symbol as key -> unique, needs [] brackets
  age: 21,
  location: "nashik",
  email: "tanmaylokhande2964@gmail.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Saturday"], // array inside object
}; // object created successfully

// ---------------- ACCESSING VALUES ----------------

// mostly use dot notation to access properties
// console.log(JsUser.email);

// when no option then use square brackets (for keys with spaces or quotes)
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);

// accessing Symbol property (MUST use [] with the symbol reference)
// console.log(JsUser[mySym]);

// ---------------- MODIFYING VALUES ----------------

JsUser.email = "tanmay@chatGpt.com"; // changed the email successfully

// FREEZING object -> makes object IMMUTABLE (locked)
// after freezing -> cannot ADD, DELETE or UPDATE properties
Object.freeze(JsUser);

JsUser.email = "tanmay2964@gmail.com"; // will NOT change (because object is frozen)
// console.log(JsUser.email); // output still: tanmay@chatGpt.com

// ---------------- ADDING METHODS ----------------

// function stored inside object -> called METHOD
JsUser.greeting = function () {
  console.log("hello Js User");``
}

// using `this` -> refers to the SAME object (JsUser here)
JsUser.greeting2 = function () {
  console.log(`hello Js User, ${this.name}`);
}``

// ---------------- CALLING METHODS ----------------
// console.log(JsUser.greeting()); // prints: hello Js User + undefined (because console.log inside + outer console.log)
// console.log(JsUser.greeting2()); // prints: hello Js User, Tanmay + undefined
