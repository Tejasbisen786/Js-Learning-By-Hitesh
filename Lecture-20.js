// ***** This and Arrow Function In Js *******

// this current  value  ko show krta hai
const user = {
  userName: "Tejas",
  Price: 999,

  welcomeMesssage: function () {
    console.log(`${this.userName} Welcome To Our Website`);
    //    console.log(this);
  },
};

// user.welcomeMesssage()
// user.userName="sam"
// user.welcomeMesssage()

// console.log(this);  // {} *** this repersent the empty object

// ** in window Global object is called as = window

//****Manual Function

// function chai(){

//     let userName="Tejas"
//     console.log(this.userName);
// }
// console.log(chai());

//****Arrow Function

const chai = () => {
  let UserName = "Tejas";
  console.log(this);
};
// chai()

// **Arrow Function
// syntax
() => {};
//  Explicit Return   Need to defined the return keyword
const addTwo = (num1, num2) => {
  return num1 + num2;
};
// console.log(addTwo(4, 6));

// implicit return   No Need to Defines the return keyword 

const addTwo1 = (num1, num2) => num1 + num2;
const addTwo2 = (num1, num2) => (num1 + num2);

// Returning Object in the arow function 
const addTwo3 = (num1, num2) => ({userName:"Tejas"})

// console.log(addTwo3(3,5));

// console.log(addTwo(4, 6));

const myArray=[2,5,6,7]
// myArray.forEach(function(){})
// myArray.forEach(()=>())
