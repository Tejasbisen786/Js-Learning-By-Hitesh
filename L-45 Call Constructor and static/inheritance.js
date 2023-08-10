class User{
    constructor(username){
        this.username=username
    }
    logMe(){
        console.log(`UserName is : ${this.username}`);
    }
}


class Teacher extends User{

    constructor(username,email,pass){
        super(username)
        this.email=email
        this.pass=pass
    }
    addCourse(){
        console.log(`New Course was  added by ${this.username}`);
    }

}

const chai =  new Teacher("Tejas","tejas@gmail.com","123pass")
chai.addCourse()

const Tea= new User("bisentejas")

Tea.logMe()  
chai.logMe()


console.log(chai instanceof User);