// object literals 

const mySymbol = Symbol("key1");

const jsUser = {
    name : "Anoop",
    "Full name" : "Anoop kumar burnwal", // can't be used by dot method eg. console.log(jsUser."Full name")
    phn : "8709743635",
    // mySymbol : "myKey1" , // not stored as a symbol rather string;
    [mySymbol] : "myKey1" , // now stored as a symbol
    email : "anoopburnwal@gmail.com",
    age : 18 ,
    location : "Dhanbad",
    isLOggedIn : false ,
    isLOggedInDays : ["Monday" , "Tuesday" , "Friday"],
}

// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["Full name"])
// console.log(jsUser[mySymbol]) // not stored as a symbol now 
// console.log(typeof jsUser[mySymbol]) 

jsUser.email = "burnwalanoop@gmail.com",
// Object.freeze(jsUser); // after this value doesn't changes 
// jsUser.email = "kumarburnwal@gmail.com";
console.log(jsUser);

jsUser.greeting = function(){
    console.log("Heloo everyone.")
}

console.log(jsUser.greeting());
console.log(jsUser.greeting);
