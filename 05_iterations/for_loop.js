// for loop

for(index = 1 ; index <= 10 ; index ++){
    const element = index ;
    if(element == 4){
        // console.log("4 is the best number");
    }
    // console.log(element);
}

for(i = 1; i < 11 ; i++){
    // console.log(`Inner loop value ${i}`);
    for(j = 1; j < 11 ; j++){
        // console.log(`Outer loop value ${j} and inner loop value is ${i}`);
        // console.log(i+ "*" +j + "=" + i*j );
    }
}

let myArray = ["flash" , "batman" , "spiderman"];
// console.log(myArray.length)
for(i = 0 ; i < myArray.length ; i++){
    const element = myArray[i] ;
    // console.log(element);
}


// ++++++++++++++++++++++ BREAK and CONTINUE keyword +++++++++++++++++++++++++++++++

for(i = 1 ; i<=20 ; i++){
    if(i == 5){
        // console.log(`Detected 5`);
        break;
    }
    // console.log(`value of i is ${i}`);
}


for(i = 1 ; i<=20 ; i++){
    if(i == 5){
        console.log(`Detected 5`);
        continue;
    }
    console.log(`value of i is ${i}`);
}