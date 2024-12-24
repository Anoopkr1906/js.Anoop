// for of

const arr = [1,2,3,4,5];

for(const val of arr){
    // console.log(val);
}

const greetings = "Hello world"

for(const greet of greetings){
    // console.log(`Each char of greeting is ${greet}`);
}

// +++++++++++++++ MAPS +++++++++++++++

const map = new Map();
map.set('IN' , "India");
map.set('CH' , "China");
map.set('FR' , "France");

// console.log(map);

for(const [key,value] of map){
    // console.log(key , ":-" , value);
}


// objects are not iterable by this way ..
const myObject = {
    'game1' : "NFS",
    'game2' : "spiderman"
}
for(const [key,value] of myObject){
    // console.log(key , ":-" , value); // shows error as object can't be iterated through this way 
}


