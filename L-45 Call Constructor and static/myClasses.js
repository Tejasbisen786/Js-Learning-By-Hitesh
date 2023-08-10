// ********Classes And Constructor *****
// ES6

// class User {
//   constructor(username, email, password) {
//     this.username = username;
//     this.email = username;
//     this.password = password;
//   }}

//   encryptPassword(password){
    
//     return `${this.password}abc`
//   }

//   doCapatalizeUsername(){
    
//     return `${this.username.toUpperCase()}`
//   }

// }

// const chai = new User("Tejas123","T@gmail.cm","pass123")


// console.log(chai.encryptPassword());
// console.log(chai.doCapatalizeUsername());








// ****behind the scene

function User(username, email, password){
    this.username = username;
    this.email = username;
    this.password = password;
}
User.prototype.encryptPassword=function(){
    return `${this.password}abc`
    
}

User.prototype.changeUsername=function(){
    
    return `${this.username.toUpperCase()}`
    
    
}


const newchai = new User("Bisen13","B@gmail.cm","123new")

console.log(newchai.changeUsername());
console.log(newchai.encryptPassword());
