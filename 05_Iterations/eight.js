// ------------------------------ REDUCE ------------------------------
// reduce() is used when you want to take all values of an array
// and "reduce" them into a SINGLE value (sum, total, average, etc.)

const mynums = [1,2,3]

// LONG FORM (with console logs to understand reduce)

// const MyTotal = mynums.reduce(function(acc, curval) {
//   console.log(`acc: ${acc} and cu rval ${curval}`);
//   return acc + curval
// }, 0)



// SHORT FORM (arrow function)

// const MyTotal = mynums.reduce((acc, curr) => acc + curr , 0)
// acc (accumulator) starts with 0 (second argument)
// curr is the current value from array

// console.log(MyTotal);
// Output → 6  (1+2+3)


// ------------------------------ SHOPPING CART TOTAL ------------------------------
// VERY REAL USE CASE: calculating total bill of items in cart

const shoppingCart = [
  {
    itemName: "js course",
     price: 2999 },
  {
    itemName: "python course",
    price: 999 },
  {
    itemName: "mobile dev course",
    price: 1299 },
  {
    itemName: "data science course",
    price: 29999 },
  {
    itemName: "AI course",
    price: 12999 },
]

// reduce to get total price
const PriceToPay = shoppingCart.reduce((acc, item) => acc + item.price , 0)
// acc → starts from 0
// item.price → each item's price is added to acc

console.log(PriceToPay);
// Output → 48295
