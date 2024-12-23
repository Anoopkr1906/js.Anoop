// IMMEDIATELY INVOKED FUNCTION EXPRESSION (IIFE) +++++++++++++++++++

// function chai(){
//     console.log("DB connected");
// }
// chai();

// IIFE .....................

(function chai(){
    console.log("DB connected");
})();

( (name) => {
    console.log(`DB connected to ${name}`);
})("Anoop");