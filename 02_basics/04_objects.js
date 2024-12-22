// const tinderUser = new Object() // singleton object

const tinderUser = {}; // non singleton 
tinderUser.id = "123abc"
tinderUser.name = "Anoop"
tinderUser.isLoggedIn = false ;

// console.log(tinderUser);


const realUser = {
    email : "anoop@gmail.com",
    name :{
        full_name :{
            first_name: "Anoop" ,
            last_name : "Burnwal" ,
        }
    }
}
// console.log(realUser.name.full_name.last_name);




// ****** Merging two objects **********

const object1 = { 1:"a" , 2:"b"};
const object2 = { 3:"c" , 4:"d"};

// not a good way to merge
// const object3 = {object1 , object2};
// console.log(object3);


// good way to merge 
// const object3 = Object.assign({} ,object1 , object2);
// console.log(object3);

// using spread method 
const object3 = {...object1, ...object2};
console.log(object3);


const users = [
    {
        id:"23acbc",
        email: "anoop@gmail.com"
    },
    {
        id:"23acbc",
        email: "anoop@gmail.com"
    },
    {
        id:"23acbc",
        email: "anoop@gmail.com"
    },
]

users[1].email 

console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
