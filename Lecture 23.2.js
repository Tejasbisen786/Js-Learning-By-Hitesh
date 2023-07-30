// ** Truthy And falsy value

const userEmail = "t@gmail.com "; // truethy Value
const userEmail1 = []; // false Value

if (userEmail) {
  console.log("Got Email");
  // console.log(`${userEmail}`);
} else {
  console.log("Dont Have email");
}

// Falsy Values

// false, 0 , -0 , BigInt 0n , "" ,null , undefined,NaN

// Truthy Value

// "0" , 'false' , " " [] ,{}, function(){} ,

if (userEmail1.length === 0) {
  console.log("Array is Empty");
}

const emptyObj = {};

if (Object.keys(emptyObj.length == 0)) {
  console.log("empty Objet ");
}

false == 0; // True
false == ""; // True
0 == ""; //true

// logical oprator
// &&

// || /

// Nullish Coalecing Opeartor (??): null undefined

let val1;
// val1 = 5 ?? 10

// val1 = null ?? 10
// val1 = undefined ?? 15cs
// val1 = null ?? 10 ?? 15
console.log(val1);


// Ternary Opearator  ?

Condition ? true : false

const iceteaPrice =100
iceteaPrice>=200 ? console.log("Greter than 200"): console.log("Less Than 200");