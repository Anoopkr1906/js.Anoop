// ES6

// class User1 {
//     constructor(username , email , password){
//         this.username = username;
//         this.email = email;
//         this.password = password ;
//     }

//     encryptPassword(){
//         return `${this.password}abc`;
//     }
//     changeUsername(){
//         return `${this.username.toUpperCase()}`
//     }
// }

// const userDetails = new User1("Anoop" , "akb@gmail.com" , "3245");
// console.log(userDetails.encryptPassword());
// console.log(userDetails.changeUsername());


function User2(username , email ,password){
    this.username = username;
    this.email = email;
    this.password = password ;  
}

User2.prototype.encryptPassword = function(){
    return `${this.password}abc`;
}
User2.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`;
}

const chai = new User2("Anoop" , "akb@gmail.com" , "3245");
console.log(chai.encryptPassword());
console.log(chai.changeUsername());