// +++++++++++ dates ++++++

const myDate = new Date();
console.log(myDate);

console.log(myDate.toString());
console.log(myDate.toISOString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleDateString());


let myCreatedDate1 = new Date(2023 , 0 , 23);
console.log(myCreatedDate1.toString());
let myCreatedDate2 = new Date(2023 , 0 , 23 , 5 , 24, 56);
console.log(myCreatedDate2.toLocaleString());

let myTimeStamp = Date.now();
console.log(myTimeStamp); // gives value in milliseconds
console.log(myCreatedDate1.getTime());

console.log(Math.floor(Date.now()/1000)); // gives in seconds 