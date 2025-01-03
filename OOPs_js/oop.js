// const user = {
//     username : "Anoop",
//     loginCount : 8 ,
//     signedIn : true ,

//     getUserDetails: function(){
//         // console.log("Got user details from database")
//         // console.log(`Username: ${this.username}`)
//         // console.log(this)
//     }
// }

// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this)



function user(username , loginCount , isLoggedIn){
    this.Username = username  // left one is variable 
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn 
    this.greeting = function(){
        console.log(`Welcome ${username}`);
    }

    return this // by default present 
}

const userOne = new user("Anoop" , 6 , true)
const userTwo = new user("Anooz" , 4 , false)

// console.log(userOne)
// console.log(userTwo) 

console.log(userOne.constructor)
console.log(userOne instanceof user)  