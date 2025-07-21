//-------------------------------------------------------------------------------------------
//   vedio -10

//Stack (primitive), Heap(non- primitive)
/*

stack :
 1. Stack Memory (Call Stack)
Used for: Storing primitive values and function call context.

Examples:

Numbers (let x = 5)

Booleans (let flag = true)

Strings (let name = "Tanmay")

null, undefined, Symbol, BigInt

Fast access but limited in size.

Stored by value – copying creates a new independent value.





Heap Memory:
Used for: Storing reference types (non-primitive data).

Examples:

Objects (let obj = { name: "Tanmay" })

Arrays (let arr = [1, 2, 3])

Functions (function greet() {})

Larger and slower to access than the stack.

Stored by reference – copying passes the memory address.




|     Feature             | Stack Memory                    | Heap Memory                       |
| ----------------------- | ------------------------------- | --------------------------------- |
| Used For                | Primitive types, function calls | Reference types (objects, arrays) |
| Access Speed            | Faster                          | Slower                            |
| Memory Size             | Small and limited               | Large and flexible                |
| Allocation/Deallocation | Automatic (LIFO)                | Manual or Garbage Collected       |
| Copy Behavior           | By Value                        | By Reference                      |

*/

let myname = "Tanmay"
let anothername = myname //in stack we get copy of the og file


anothername = "Tanu"

console.log(myname);//here the og value is stored
console.log(anothername);//here the last updated value is stored



let userone = {
  email: "User@google.com",
  upi: "user@axl"
}//stored as an object


let usertwo = userone //1 stored in 2 we get reference here


usertwo.email = "tanmay@google.com" //changing the email in the 2nd email


console.log(userone.email) // changes applied here to as the user one is an heap value (obj) so inherithed the changes made in 2
console.log(usertwo.email)
//both console print same


//  https://excalidraw.com/#json=e4JzIloQEDF3Ip6IIAqar,g9tphELKb5cKZca64xFXCg