let score = "33";

console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);


// output of 9th line if value in score are as following After conversion to number
// "33" => 33
// "33abc" => NaN
// true => 1  , false => 0
// null => 0
// undefined => NaN  


let isLoggedIn = 1;
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);

//output if converted to boolean 
// 1 => true  0 => false
// "" => false 
// "ajgkeuej" => true



let someNumber = 33
let stringNumber = String(someNumber)
console.log(typeof stringNumber)