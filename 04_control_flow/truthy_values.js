const array = [];
if(array){
    console.log("Got user email");
}
else{
    console.log("Dont have user email")
}

// FALSY values
// null , undefined , "" , 0 , -0 , false , NaN , BigInt 0n 

// TRUTHY values
// [] , "0" , 'false' , " " , {} , function(){} , 


// Nullish coalescing operator (??) :works in the case of null and undefined

/*
let val1;
val1 = 5 ?? 10 
console.log(val1);

let val2 ;
val2 = null ?? 20 ;
console.log(val2);
*/

// TERNARY operator 
// condition ? a : b

const price = 100;
price >= 80 ? console.log("yes") :console.log("no");

val1 = 10>20 ? "anoop" : "anooz" ;
console.log(val1);
