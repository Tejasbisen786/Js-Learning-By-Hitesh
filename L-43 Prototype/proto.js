// ********Lecture 43: - Prototype in Javascript ******************

function multiplByfive(num) {
  // this.num=num
  return num * 5;
}

// in javascript everything is a object

// function is object as well as function also
// console.log(multiplByfive.power=2);
// console.log(multiplByfive(4));
console.log(multiplByfive.prototype);

function CreateUser(username, score) {
  this.username=username
  this.score=score
}

CreateUser.prototype.increment = function () {
  this.score++;
};

CreateUser.prototype.printMe=function(){
    console.log(`score is ${this.score}`);
}
const chai = new  CreateUser("chai", 25);
const tea =  new CreateUser("Tea", 250); 


chai.printMe()

