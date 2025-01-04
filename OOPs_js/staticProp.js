class User {
    constructor(username){
        this.username = username ;
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }

    static createId(){ // static does not gives access to user 
        return `123`;
    }
}

const Anoop = new User("Anoop");
// console.log(Anoop.createId());

class Teacher extends User {
    constructor(username , email){
        super(username);
        this.email = email ;
    }
}

const iphone = new Teacher("iphone" , "phone@gmail.com");
iphone.logMe();
console.log(iphone.createId()) // also gives error because of static Prop...