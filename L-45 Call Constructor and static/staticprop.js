
class User{
    constructor(username){
        this.username=username

    }
    logMe(){
        console.log(`UserName: ${this.username}`);
    }
    static createId(){
        return ` 123`
    }
}

class teacher extends User{
    constructor(username, emial)
    {
        super(username)
        this.emial=emial
    }
}

const tejas = new User("Tejas")
// tejas.logMe()
// console.log (tejas.createId())

const iphone= new teacher("Iphone","i@gmail.com")
console.log(iphone.createId());