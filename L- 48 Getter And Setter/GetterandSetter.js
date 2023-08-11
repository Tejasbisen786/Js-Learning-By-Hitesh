// *****Lecture: Getter And Setter And Stack Overflow ******

class User {
  constructor(emial, password) {
    (this.emial = emial), (this.password = password);
  }

  get password() {
     return `${this._password}Tejas` //  this._password.toUpperCase();
  }
  set password(value){
    this._password=value   // RangeError: Maximum call stack size exceeded 

  }

  get emial(){
    return this._emial.toUpperCase()

  }

  set emial(value){
     this._emial=value

 
  }
}


const tejas = new User("t@gmail.com", "abc");
console.log(tejas.password);
console.log(tejas.emial);

