
class User{
    constructor(username){
        this.username=username

    }
    logMe(){
        console.log(`UserName: ${this.username}`);
    }
    createId(){
        return ` 123`
    }
}

const tejas = new User("Tejas")
tejas.logMe()
console.log (tejas.createId())