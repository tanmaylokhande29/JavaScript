// -----------------------------
// OBJECT CREATION
// -----------------------------

// const tinderUser = new Object()   // 1st method → creates a singleton-like empty object
const tinderUser = {}                // 2nd method → object literal (most used)

tinderUser.id = "123abc"
tinderUser.name = "tan"
tinderUser.isLoggedIn = false

console.log(tinderUser);
// Output: { id: '123abc', name: 'tan', isLoggedIn: false }


// -----------------------------
// NESTED OBJECTS
// -----------------------------
// Object inside object (commonly seen in APIs)
const regularUser = {
  email: "some@gmail.com",
  fullname: {
    userfullname: {
      firstname: "tanmay",
      lastname: "lokhande"
    }
  }
}

console.log(regularUser.fullname.userfullname.firstname);
// Accessing nested values → dot chaining


// -----------------------------
// OBJECT MERGING
// -----------------------------
const obj1 = { 1: "a", 2: "b" }
const obj2 = { 3: "a", 4: "b" }
const obj4 = { 5: "a", 6: "b" }

// WRONG way (creates object inside object)
// const obj3 = { obj1, obj2 }   ❌

// Correct ways:

// 1) Using Object.assign()
// const obj3 = Object.assign({}, obj1, obj2, obj4)

// 2) Using spread operator (most modern, easiest)

const obj3 = { ...obj1, ...obj2 }
console.log(obj3);
// Output: {1:'a',2:'b',3:'a',4:'b'}


// -----------------------------
// ARRAY OF OBJECTS (VERY COMMON IN APIs)
// -----------------------------
const users = [
  { id: 1, email: "t@gamil.com" },
  { id: 1, email: "s@gamil.com" },
  { id: 1, email: "a@gamil.com" },
  { id: 1, email: "m@gamil.com" }
]

// Accessing values inside array of objects:
users[1].email    // "s@gamil.com"


// -----------------------------
// OBJECT METHODS
// -----------------------------
console.log(Object.keys(tinderUser));
// → returns all keys as an array  [ 'id', 'name', 'isLoggedIn' ]

console.log(Object.values(tinderUser));
// → returns all values as an array [ '123abc', 'tan', false ]

console.log(Object.entries(tinderUser));
// → returns array of [key, value] pairs
// [
//   ['id', '123abc'],
//   ['name', 'tan'],
//   ['isLoggedIn', false]
// ]

console.log(tinderUser.hasOwnProperty('isLoggedIn'));
// Checks if key exists → true


// -----------------------------
// OBJECT DESTRUCTURING
// -----------------------------
const course = {
  courseName: "javascript",
  price: "999",
  Instructor: "Tanmay"
}

// Instead of:
// console.log(course.Instructor);

// Use destructuring:
const { Instructor } = course
console.log(Instructor);   // Tanmay


// -----------------------------
// JSON FORMAT (API EXAMPLE)
// -----------------------------
// API does NOT give objects like JS objects.
// It gives JSON (looks similar but key/value must be in quotes)
//
// {
//   "name": "tanmay",
//   "courseName": "js in hindi",
//   "price": "free"
// }
//
// This is THE format used in backend/frontend communication.
