// -------------------------------------------------------------
// forEach VS filter
// -------------------------------------------------------------

const coding = ["js", "ruby", "java", "python", "cpp"]

// forEach always RETURNS undefined.
// Even if you write `return item`, it DOES NOT create a new array.

// const values = coding.forEach((item) => {
//   console.log(item);
//   return item;   // <-- does NOT work the way map/filter works
// })
// console.log(values); // undefined



// -------------------------------------------------------------
// FILTER METHOD
// -------------------------------------------------------------

const myNums = [1,2,3,4,5,6,7,8,9,10]

// Case 1: NO {} → implicit return (no need to write "return")
// const newNums = myNums.filter((num) => num > 4)

// Case 2: USING {} → MUST write return
// const newNums = myNums.filter((num) => {
//   return num > 4
// })



// -------------------------------------------------------------
// forEach + push (manual filter)
// -------------------------------------------------------------

const newNums = []

myNums.forEach((num) => {
  if (num > 4) {
    newNums.push(num)
  }
})

// console.log(newNums)
// Output: [5,6,7,8,9,10]

/*
WHY FILTER IS BETTER:
- filter automatically returns a NEW ARRAY
- filter expects a condition (true → include, false → skip)
- forEach is only for looping, not returning values
*/



// -------------------------------------------------------------
// BOOK FILTER EXAMPLES
// -------------------------------------------------------------

const books = [
  { title: 'Book One',   genre: 'Fiction',     publish: 1981, edition: 2004 },
  { title: 'Book Two',   genre: 'Non-Fiction', publish: 1992, edition: 2008 },
  { title: 'Book Three', genre: 'History',     publish: 1999, edition: 2007 },
  { title: 'Book Four',  genre: 'Non-Fiction', publish: 1989, edition: 2010 },
  { title: 'Book Five',  genre: 'Science',     publish: 2009, edition: 2014 },
  { title: 'Book Six',   genre: 'Fiction',     publish: 1987, edition: 2010 },
  { title: 'Book Seven', genre: 'History',     publish: 1986, edition: 1996 },
  { title: 'Book Eight', genre: 'Science',     publish: 2011, edition: 2016 },
  { title: 'Book Nine',  genre: 'Non-Fiction', publish: 1981, edition: 1989 },
]

// EXAMPLE 1:
let userBooks = books.filter((bk) => bk.genre === "History")

// EXAMPLE 2: multiple conditions
userBooks = books.filter((bk) => {
  return bk.publish >= 1995 && bk.genre === "History"
})

console.log(userBooks)

/*
Explanation:
bk.publish >= 1995   → book published in or after 1995
bk.genre === "History"  → only History books

filter returns only those objects from array that satisfy BOTH conditions
*/
