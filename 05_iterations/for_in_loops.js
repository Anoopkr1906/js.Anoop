// objects can be iterated using FOR IN LOOPS .................

const ourObject = {
    js : 'javascript',
    cpp : 'c plus plus',
    py : 'python',
    rb : 'ruby'
}

for(const key in ourObject){
    // console.log(key);
    // console.log(ourObject[key]);
    // console.log(`${key} is shortcut for ${ourObject[key]}`);
}




const arr = [1,2,3,4,5];

for(const key in arr){
    // console.log(key);      // in case of array while iterating through for in loop only key/index can be obtained not the values but can be accessed dirctly using for of loop

    // console.log(arr[key]);     // values can be accessed through this way ..
}



// MAPS can also be not iterated through for in loop