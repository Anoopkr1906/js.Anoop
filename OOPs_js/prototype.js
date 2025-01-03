let myName = "Anoop    " ;
let MyGame = "Money      ";

// defining a method true length which gives only the true length excluding spaces of string 
// done from line 60 but basics starts from here 

// console.log(myName.truelength);

let myHeroes = ["thor" , "ironman" , "antman"];

let heroPower = {
    thor: "hammer",
    ironman: "intelligence",
    antman: "size",

    getThorPower: function(){
        // console.log(`Thor power is: ${this.thor}`);
    }
}

Object.prototype.anoop = function(){
    // console.log(`Anoop is present in all objects`)
}

Array.prototype.heyAnoop = function(){
    // console.log(`Anoop says hello`)
}

// heroPower.anoop()
myHeroes.anoop();
myHeroes.heyAnoop();
// heroPower.heyAnoop() ; // defined only for array so gives error here 



// INHERITANCE 

const user = {
    name: "Anoop",
    email: "abc@gmail.com",
}
const Teacher = {
    makeVideo : true,
}
const TeachingSupport = {
    isAvailable : false ,
}
const TAsupport = {
    makeAssignment : 'JS assignment',
    fulltime : true ,
    __proto__: TeachingSupport
}

Teacher.__proto__= user  // old syntax 

// modern syntax
Object.setPrototypeOf(TeachingSupport , Teacher)


let anotherUsername = "Papa Mummy   ";
String.prototype.trueLength = function(){
    console.log(`${this}`);
    // console.log(`${this.name}`);
    console.log(`True length is ${this.trim().length}`);
}

anotherUsername.trueLength();
"Anoop".trueLength();
"IceTea".trueLength();