
// {} //-->scope
var c=300
let a=100;
if (true) {
  let a = 10;
  const b = 20;
  var c = 30;// or c =30
  //console.log("inner: ",a);

}

// console.log(a);
// console.log(b);
// console.log(c); // here c get printed has it is from var drawbacks of var



function one(){
  const username = "tanmay"


  function two(){
    const website ="youtube"
    //console.log(username);
  }
  // console.log(website);

  two()
}
one()


if (true) {
  const username ="tanmay"
  if (username === "tanmay") {
    const website =" youtube"
    //console.log(username + website); // wont run due to scope
  }
  // console.log(website);
}
// console.log(username) wont run due to scope



//-----------------------------------------Intresting-----------------------------------------------


function addone(num) {
  return num + 1

}
addone(5)


const addTwo = function(num){
  return num +2
}
addTwo(5)


//above are also example of hoisting