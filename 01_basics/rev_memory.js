//-------------------------------------------------------------------------------------------
//   vedio -10

//Stack (primitive), Heap(non- primitive)
/*


📝 Stack Memory:
- Used for: Primitive values (Number, String, Boolean, null, undefined, Symbol, BigInt) and function calls.
- Stores values directly.
- Copy behavior: By Value → A new copy is created when assigning.
- Fast but small in size.

Examples:
Numbers (let x = 5)
Booleans (let flag = true)
Strings (let name = "Tanmay")
null, undefined, Symbol, BigInt
Fast access but limited in size.
Stored by value – copying creates a new independent value.


📝 Heap Memory:
- Used for: Reference types (Objects, Arrays, Functions).
- Stores values by reference (memory address).
- Copy behavior: By Reference → Changing one will affect the other.
- Slower but large and flexible.

Examples:

Objects (let obj = { name: "Tanmay" })
Arrays (let arr = [1, 2, 3])
Functions (function greet() {})
Larger and slower to access than the stack.
Stored by reference – copying passes the memory address.



📊 Difference Table:
| Feature               | Stack Memory (Primitive)         | Heap Memory (Non-Primitive)       |
| --------------------- | -------------------------------- | --------------------------------- |
| Used For              | Numbers, Strings, Booleans etc.  | Objects, Arrays, Functions        |
| Access Speed          | Faster                           | Slower                            |
| Memory Size           | Small and limited                | Large and flexible                |
| Copy Behavior         | By Value (independent copy)      | By Reference (shared address)     |

*/

let myname = "Tanmay"
let anothername = myname  // Creates a COPY in stack

anothername = "Tanu"      // Change only affects 'anothername'

console.log(myname);       // Output: Tanmay (original unchanged)
console.log(anothername);  // Output: Tanu   (changed copy)


// -------- Heap Example (Non-Primitive) --------
let userone = {
  email: "user@google.com",
  upi: "user@axl"
} // Object stored in Heap

let usertwo = userone      // Copy by reference (same memory location)

usertwo.email = "tanmay@google.com" // Changing via usertwo

console.log(userone.email) // Output: tanmay@google.com (changed!)
console.log(usertwo.email) // Output: tanmay@google.com
// Both show the same because objects share reference

//  https://excalidraw.com/#json=e4JzIloQEDF3Ip6IIAqar,g9tphELKb5cKZca64xFXCg