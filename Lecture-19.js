// ********** Lecture 19: Scope Level and Mini Hoisting ******

// *** Nested Scope in javascirpt

function one() {
  const userName = "Tejas";

  function two() {
    const website = "YT";
    console.log(userName);
  }
  //   console.log(website);

  two();
}

// one();

// **** child function can acces the variable of parant function

if (true) {
  const userName = "Tushar";
  if (userName === "Tushar") {
    const website = " youtube";
    // console.log(userName + website);
  }

  // console.log(website);
}
// console.log(userName);

// ****** Intersting Concept **********

console.log(addone(5));
function addone(num) {
  return num + 1;
}
//  ** Varable can Hold Function Json value Array
// ** It is very  much powerful

// hoisting  before defining the value of function
// you are trying to  get acces the those function
addTwo(5);

const addTwo = function (num) {
  return num + 2;
};
