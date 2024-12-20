const account_id = 19062006
let email_id = "anoopkumar@gmail.com"
var account_password = "123123"
account_city = "Dhanbad";

// account_id = 19062007  // not allowed

email_id = "anoopburnwal@gmail.com"
account_password = "1906"
account_city = "Jamshedpur"
let account_state ;

/*
prefer not to use var 
because of issue in block scope and functional scope 
*/
console.log(account_id);

console.table([email_id,account_password,account_city,account_id,account_state])
