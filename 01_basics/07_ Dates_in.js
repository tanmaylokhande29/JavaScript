//Dates

// let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toTimeString());

// console.log(typeof myDate);


let myCreatedDate = new Date(2023,0,23)// month starts from 0 in js
// console.log(myCreatedDate.toDateString());
// console.log(myCreatedDate.toDateString);

let myCreatedDate1 = new Date(2023,0,23,5,3)// month starts from 0 in js
// console.log(myCreatedDate1.toLocaleString());


let  myCreateddate = new Date("2023-01-14")  //yyyy-mm--dd
// console.log(myCreateddate.toLocaleString());



let  myCreateddate1 = new Date("06-14-2024")  //mm-dd-yyyy
// console.log(myCreateddate1.toLocaleString());


let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));// toget fraction less values we add floor

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth()+1);
console.log(newDate.getDay());

//imp method

newDate.toLocaleDateString('default',{
  weekday: "long",
  // timeZone: ''
})
