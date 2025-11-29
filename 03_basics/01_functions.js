// -----------------------------------------------------------------------------
// ⭐ BASIC FUNCTION
// -----------------------------------------------------------------------------
// A simple function that prints letters.
// Functions run ONLY when called (sayMyName()).

function sayMyName() {
  console.log("T");
  console.log("A");
  console.log("N");
  console.log("M");
  console.log("A");
  console.log("Y");
}
// sayMyName();


// -----------------------------------------------------------------------------
// ⭐ FUNCTION WITH PARAMETERS
// -----------------------------------------------------------------------------
// Parameters = placeholders inside the function
// Arguments = actual values passed when calling

function addTwoNumbers(number1, number2) {
  // Method 1:
  // let result = number1 + number2;
  // return result;

  // Method 2 (cleaner):
  // return number1 + number2;
}

const result = addTwoNumbers(3, 4);
// console.log("result :", result);  // 7


// -----------------------------------------------------------------------------
// ⭐ DEFAULT PARAMETERS
// -----------------------------------------------------------------------------
// If no value is passed, "sam" becomes the default username.

function loginUserMessage(username = "sam") {
  // If user passes nothing → username = undefined
  if (username === undefined) {
    // can also use: if (!username)
    console.log("please enter a username");
    return;       // stops the function
  }

  return `${username} just logged in`;   // returning → not printing
}

// console.log(loginUserMessage("tanmay"));
// console.log(loginUserMessage());      // uses default "sam"


// -----------------------------------------------------------------------------
// ⭐ REST OPERATOR (...)
// -----------------------------------------------------------------------------
// Collects EXTRA values into an array.

function calculateCarPrice(...num1) {
  // All values become an array
  return num1;
}
// calculateCarPrice(200, 400, 500, 200, 5000);
// → [200, 400, 500, 200, 5000]


// Using rest with normal parameters
function CalculateCarPrice(val1, val2, ...num1) {
  // val1 → first value
  // val2 → second value
  // num1 → remaining values (array)
  return num1;
}

// CalculateCarPrice(200, 400, 500, 200, 5000);
// Output → [500, 200, 5000]


// -----------------------------------------------------------------------------
// ⭐ PASSING OBJECTS TO FUNCTIONS
// -----------------------------------------------------------------------------
const user = {
  username: "tanmay",
  price: 199,
};

function handleObject(anyobject) {
  // Access properties using dot notation
  console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

handleObject(user);

// Passing object directly (no variable needed)
handleObject({
  username: "sam",
  price: 399,
});


// -----------------------------------------------------------------------------
// ⭐ PASSING ARRAYS TO FUNCTIONS
// -----------------------------------------------------------------------------
const myNewArray = [200, 300, 400, 500];

function returnSecondvalue(getarray) {
  // Indexing starts from 0 → so [1] = second element
  return getarray[1];
}

// returnSecondvalue(myNewArray);          // 300
// returnSecondvalue([200,300,400,50]);    // 300
