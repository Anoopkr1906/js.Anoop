const user = {
    userName : "Anoop",
    price : "999" ,
    welcomeMessage: function(){
        console.log(`${this.userName}, welcome to website`);
        // console.log(this);
    }
}

// user.welcomeMessage();
// user.userName = "Sonu";
// user.welcomeMessage();

// console.log(this);

// function chai(){
//     let userName = "Anoop"
//     console.log(this.userName);
// }

// chai();

// +++++++++++++ arrow function ++++++++++++++

// const chai = () => {
//     let userName = "Anoop"
//     console.log(this);
// }
// chai();


// const addTwo = (number1 , number2) => {
//     return number1 + number2 ;
// }
// console.log(addTwo(3,4));


// IMPLICIT RETURN +++++++++++++

// const addTwo = (number1 , number2) => (number1 + number2) ;

// console.log(addTwo(3,4))

const addTwo = (number1 , number2) => ({username : "Anoop"}) ;
console.log(addTwo(3,4));
