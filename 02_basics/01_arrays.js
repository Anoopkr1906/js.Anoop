const myArray1 = [1,2 ,3 ,4 ,5]
console.log(myArray1[0]);
myArray1.push(6);
myArray1.unshift(9);
myArray1.shift();
console.log(myArray1);

console.log(myArray1.includes(8))

// const myHeroes = ["shaktiman" , "naagraj" , "ironman"];
// const myArray2 = new Array(1,2,3,4) ;

const newArray = myArray1.join();  // converts into string

console.log(newArray);
console.log(typeof newArray);

console.log("A" , myArray1)
const myN1 = myArray1.slice(1,3);
console.log(myN1);

console.log("B",myArray1);
const myN2 = myArray1.splice(1,3);
console.log("C",myArray1);
console.log(myN2);





