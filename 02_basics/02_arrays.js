const marvelHeroes = ["thor" , "ironman" , "hulk" , "antman"]

const dcHeroes = ["spiderman" , "flash" , "batman"];
// marvelHeroes.push(dcHeroes);
// it joins the array as array inside the first array
// console.log(marvelHeroes);

// const newHeroes = marvelHeroes.concat(dcHeroes);
// gives new array combining both arrays
// console.log(newHeroes);


// spread operator or easily concatinate in a single array 
// const new_Heroes = [...marvelHeroes,...dcHeroes]
// console.log(new_Heroes);

// flat method joins or spreads all subarrays as a single array
// const another_array = [1,2,[3,4,5],[7,[8,9]]];
// const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array) ;


// checks whether one is array or not
// console.log(Array.isArray("hitesh"));
// converts the given one in array 
// console.log(Array.from("hitesh"));


const score1 = 100;
const score2 = 200;
const score3 = 300;
console.log(Array.of(score1,score2,score3));