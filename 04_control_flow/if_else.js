// if

/*
const isUserLoggedIn = true 
const temperature = 41 ;

if(isUserLoggedIn){
    console.log("Executed1")
}

if(temperature < 50){
    console.log("less than 50")
}
else {
    console.log("Temp. is greater than 50.")
}
*/


// const balance = 1000;

// if(balance < 500){
//     console.log("less than 500")
// }
// else if(balance < 750){
//     console.log("less than 750")
// }
// else if(balance < 900){
//     console.log("less than 900")
// }
// else{
//     console.log("less than 1200");
// }


const debitCard = true;
const userLoggedIn = true ;
const loggedInFromGoogle = false ;
const loggedInFromEmail = true;

if(debitCard && userLoggedIn){
    console.log("Allowed to do shopping.")
}

if(loggedInFromEmail || loggedInFromGoogle){
    console.log("user logged in.")
}