// ************* NUMS **************

const score = 400;
console.log(score);

const balance = new Number(100);
console.log(balance);
console.log(balance.toFixed(1));
console.log(balance.toString());

const otherNumber = 123.43;
console.log(otherNumber.toPrecision(3));

const hundreds = 10000000;
console.log(hundreds.toLocaleString('en-IN'));


// **************** MATHS *********************

console.log(Math);

console.log(Math.abs(-4));
console.log(Math.round(7.543));
console.log(Math.ceil(7.5));
console.log(Math.floor(7.5));
console.log(Math. min(7,8,4,6));
console.log(Math.max(7,3,4,9,6));
console.log(Math.random());

console.log((Math.random()*10 )+ 1);

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);