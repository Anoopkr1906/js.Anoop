function setUsername(username){
    // complex DB calls
    this.username = username ;
    console.log("Called")
}

function createUser(username, email , password){
    setUsername.call(this,username)

    this.email = email ;
    this.password = password ;
}

const coffee = new createUser("coffee", "akb@gmail.com" , "190436");

console.log(coffee);