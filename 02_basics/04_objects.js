// const tinderUser = new Object()  //1st method
const tinderUser={}      // 2nd method

tinderUser.id="123abc"
tinderUser.name ="tan"
tinderUser.isLoggedIn=false

// console.log(tinderUser);

const regularUser ={
  email: "some@gmail.com",
  fullname: {
    userfullname:{
      firstname: "tanmay",
      lastname: "lokhande"

    }
  }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = { 1: "a", 2: "b"}
const obj2 = { 3: "a", 4: "b"}

// const obj3={obj1,obj2}
const obj3 = Object.assign(obj1,obj2)

console.log(obj3);






