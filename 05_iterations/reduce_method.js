const myNums = [1,2,3];

// const myTotal = myNums.reduce( function(acc , curr_val){
//     console.log(`acc: ${acc} and curr_val: ${curr_val} `);
//     return acc + curr_val ;
// } ,0);


const myTotal = myNums.reduce( (acc,curr)=> acc+curr , 0 );
console.log(myTotal);


const shoppingCart = [
    {
        courseName : "js couse",
        price : 2999
    },
    {
        courseName : "web dev course",
        price : 999
    },
    {
        courseName : "dsa course",
        price : 3999,
    },
    {
        courseName : "python course",
        price : 5999,
    }
]

const priceToPay = shoppingCart.reduce((acc , item) => acc + item.price , 0);

console.log(priceToPay);