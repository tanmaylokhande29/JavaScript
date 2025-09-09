const user ={
  username: "tanmay",
  price: 999,

  welcomeMessage: function(){
    console.log(`${this.username}, welcome to website`)
    // console.log(this);

  }
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this); // {}

// function chai(){
//   let username ="tanmay"
//   console.log(this.username);

// }



// const chai = function (){
//   let username ="tanmay"
//   console.log(this.username);
// }


const chai =  () => /*arrow function*/{

}
chai()

// const addtwo =(num1,num2) => {
//   return num1+num2
// }

// const addtwo =(num1,num2) =>  num1+num2 //implicit

// const addtwo =(num1,num2) =>  (num1+num2)

const addtwo =(num1,num2) =>  ({username: "tanmay"})

console.log(addtwo(4,5));
