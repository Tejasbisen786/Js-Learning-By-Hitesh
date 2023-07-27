// ********* Functions and Parameter in Javascript ******
// function basics

// console.log("T")
// console.log("E")
// console.log("J")
// console.log("A")
// console.log("S")
// console.log("B")

// syntas of funcion
function sayMyname() {
  //Function Defination
  console.log("T");
  console.log("E");
  console.log("J");
  console.log("A");
  console.log("S");
  console.log("B");
}

// sayMyname // Refernce get only
// sayMyname()

// FUnction With Parameter
//Parameter Defined
// function addTwoNumber(number1,number2){

//     console.log(number1+number2);
// }

// Function WIth Return Type

function addTwoNumber(number1, number2) {
  //    let reuslt= number1+number2
  //    return reuslt
  return number1 + number2;
}

// Function Calling

//Argument Passed
const result = addTwoNumber(3, 4);

// console.log("Result : ",result);


function loginUserMessage(username ="John Doe") {
    // username===undefined
    if(!username)
    {
   console.log("Please Enter a Username ");
   return 
    }
  return `${username} Just Logged In `;
}

console.log(loginUserMessage());
