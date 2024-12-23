// let a = 12;
// const b = 13;
// var c = 14;

// console.log(a)
// console.log(b)
// console.log(c)

if(true){
    let a = 12;  // local or block scope
    const b = 13;  // local scope
    var c = 14;  // global scope
}

// console.log(a) // will show error
// console.log(b)  // will show error
// console.log(c)  //prints the value 


function one(){
    const username = "Anoop"

    function two(){
        const email = "anoop@gmail.com"
        console.log(username);
    }
    // console.log(email); // not accessible defined under block
    two();
}

// one();


if(true){
    const userName = "Anoop"
    if(userName === "Anoop"){
        const nickName = "sonu" ;
        // console.log(userName + nickName); // inside scope
    }
    // console.log(nickName); // outside scope
}
// console.log(userName); // outside scope



// +++++++++++++++++ Interesting +++++++++++++++++++++
// if we directly declare the function then it can be accesed before or after function declaration

// console.log(addOne(5));
// function addOne(num1){
//     return num1 + 2;
// }


// but if we store a function in variable then it can only be accessed after declaration 

const addTwo = function (num2){
    return num2 + 3 ;
}
