
//for

for (let index = 0; index < 10; index++) {
  const element = index;
  if(element == 5){
    // console.log("5 is best Number");
  }
   // console.log(element);
}


for (let i = 1; i <= 10 ; i++) {
  // console.log(`outer loop value ${i}`);
  for (let j = 1; j < 10; j++) {
      // console.log(`Inner loop value ${j} and inner loop ${i}`);
      // console.log(i + ' * '+ j +' = ' + i*j);
  }
}


let Myarray = ["flash","batman","superman"]
console.log(Myarray.length);

for (let index = 0; index < Myarray.length; index++) {
  const element = Myarray[index];
  console.log(element);

}


// brake

// for (let index = 1; index <= 20; index++) {
//   if (index ==5) {
//     console.log(`detected 5`);
//     break

//   }
//   console.log(`value of i is ${index}`);
// }


//continue

for (let index = 1; index <= 20; index++) {
  if (index == 5) {
    // console.log(`detected 5`);
    continue
  }
  // console.log(`value of i is ${index}`);
}
