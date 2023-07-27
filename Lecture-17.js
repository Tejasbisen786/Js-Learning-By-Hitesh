// ********* Functions With Objects and array in javascript ********

// Shoping cart Logic Using functons  
          

//   Rest And Spread Operator  It act according to situation 

// here rest opearator  used 
function CalculateCartprice( vall1,val2, ...num1)
{

    return num1
}
// console.log(CalculateCartprice(200,300,600,500,3,444,0));


const user={
    username:"Tejas Bisen",
    prices:999
}

function handleObject (anyobject)
{
    console.log(`Username is :  ${anyobject.username} and Price is: ${anyobject.price}`);
}

// handleObject(user)
// handleObject({
//     username:"Sma",
//     price:399
// })

const myNewArray=[200,400,300,444]

function returnvalue(getArray)
{
    return  getArray[2]
}

// console.log(returnvalue(myNewArray));

console.log(returnvalue([550,400,300,2]));




// Scope In Javascript  next to go 