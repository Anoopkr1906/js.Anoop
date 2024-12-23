function sayMyName(){
    console.log("A")
    console.log("n")
    console.log("o")
    console.log("o")
    console.log("p")
}

// sayMyName();

// function addTwoNumbers(number1 , number2){
//     console.log(number1 + number2)
// }

// addTwoNumbers(3,4);

function addTwoNumbers(num1 , num2){
    // let result = num1 + num2 
    // return result

    return num1 + num2 
}

const result = addTwoNumbers(3,4);
// console.log("Result is: ",result)

function loginUserMessage(userName){
    return `${userName} just logged in.`
}

// console.log(loginUserMessage("Anoop"));
// console.log(loginUserMessage()); // gives undefined


function calculateCardPrice(...num1){
    return num1
}

// console.log(calculateCardPrice(100 , 200 , 300));


const user = {
    name : "Anoop",
    price : "999",
}

function handleObject(anyObject){
    console.log(`username is ${anyObject.name} and price is ${anyObject.price}`)
}

handleObject(user);
handleObject({
    name: "Anooz",
    price: "989"
})


const newArray = [100, 200, 300, 400];

function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(newArray));
console.log(returnSecondValue([200,400,600,800]));