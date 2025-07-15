const accountId = 14553
//const means the value cant be changed 

let accountEmail = "tanmay@2964"
var accountPassword ="12345"
accountCity= "Nashik"
let accountState;
//as no values defined for the accountStatethen the value stored is Undefined

// accountId=2  not allowed coz the id is const


accountEmail = "hc@hc.com"
accountPassword ="21212121"
accountCity= "mumbai"

console.log(accountId);
/*
Prefer not to use var 
beacuse of issue in block 
scope and functional scope
*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])




