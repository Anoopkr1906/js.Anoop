// stack memory (used for primitive datatypes such as boolean , string , number , symbol , bigint , null , undefined) taken by pass by value 

// heap memory (used for non primitive datatypes such as arrays , objects , functions ) taken by pass by reference 

let myYoutubeName = "anoopkumar"

let anotherYoutubeName = myYoutubeName;
anotherYoutubeName = "anoopburnwal"

console.log(myYoutubeName)
console.log(anotherYoutubeName) // pass by value means change in copies of exact values 

let userOne = {
    email : "anoopkumar1906@gmail.com",
    name : "Anoop kumar" ,
    city : "Dhanbad" ,
}

let userTwo = userOne ;

userTwo.email = "anoopburnwal192006@gmail.com"

console.log(userOne.email);
console.log(userTwo.email); // pass by reference and changes directly to the value 
