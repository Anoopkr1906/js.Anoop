// const coding = ["js" , "cpp" , "python" ,"react"];

// coding.forEach( (item)=> {
//     console.log(item);
// })


// +++++++++++++++++++++++ FILTER method +++++++++++++++++++++++++++++++++++++

const myNums = [ 1,2,3,4,5,6,7,8,9,10];

const newNums = myNums.filter( (num)=> {
    return num>4;
} );
console.log(newNums) ;