const name = "Anoop"
const rollNo = 13 ;

console.log(name+rollNo+ " Value")

console.log(`Hello my name is ${name} and my roll no is ${rollNo}`);

const gameName = new String("akburnwal");
console.log(gameName[0])
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());


console.log(gameName.indexOf('u'));
console.log(gameName.charAt(2));
console.log(gameName.substring(0,5))
console.log(gameName.slice(4,8));

const stringName = "    Anoop  kumar   ";
console.log(stringName);
console.log(stringName.trim());

console.log(gameName.replace('ak','anoopKumar'));
console.log(gameName.includes('anooz'));
