// ************* Lecture-8 : Number And Maths In Javascript *********
// const score = 400
// console.log(score);

// explicitely define Number
// const balance = new Number(100)
// console.log(balance.length );

// COnverted NUmber To String Using .toString() Method
// const out =balance.toString()
// const out =balance.length()

// console.log (out.length);  // Length
// console.log(balance.toFixed(2));  // Return The Fixed  Value
// const otherNum = 23.343434

// console.log(otherNum.toPrecision(4));  // Return The Precise Value
//  const num1 = 1000000
//  console.log(num1.toLocaleString());   // Return Adding Indian Value Syntax

// Math Library in Javascript

// console.log(Math); // Object
// console.log(Math.abs(-4));  // Convert The Negative Value To Positive Value
// console.log(Math.round(4,3));  // round of choose the bigger value
// console.log(Math.ceil(3.0));    // it Direct Consider The Bigger value if the number is in decimal form
// console.log(Math.floor(4.666)); //  IT Choose the Lesser Value
//   console.log(Math.sqrt(9));     // Return The Square root Value
// console.log(Math.pow(4,4));   // return the power value
// console.log(Math.min(4,5,6,7));   // return the min value
// console.log(Math.max(4,5,6,78,));  // Return The Max Value

// *********** Math.Random Library Important

// Generate The Random Value between 0 and 1
// const randvalue= Math.floor(Math.random()*10);    // unit digit getting by shift the value * 10
// console.log(randvalue);

// define the custom random value in some range
const min = 100;
const max = 200;

randomCustomValue = Math.floor(Math.random() * (max - min + 1) + min);

console.log(randomCustomValue);
