const mynums = [1,2,3]

// const MyTotal = mynums.reduce(function(acc,curval){
//   console.log(`acc: ${acc} and curval ${curval}`);

//   return acc + curval
// },0)


const MyTotal = mynums.reduce((acc,curr)=> acc + curr , 0)

console.log(MyTotal);


const shoppingCart = [
  {
    itemName: "js course",
    price: 2999
  },
  {
    itemName: "python course",
    price: 999
  },
  {
    itemName: "mobile dev course",
    price: 1299
  },
  {
    itemName: "data science course",
    price: 29999
  },
  {
    itemName: "AI course",
    price: 12999
  },
]

const PriceToPay = shoppingCart.reduce((acc , item)=>acc + item.price ,0)

console.log(PriceToPay);
