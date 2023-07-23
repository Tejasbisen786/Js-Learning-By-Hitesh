// ********Lecture 12: Array Part IInd Part *******

const marvel =["thor","im","sm"]
const dc=["sm","flash","Bm"]


// .puh method 
// marvel.push(dc)
// console.log(marvel);

// Array merge into one arry use Concat method 
// let x =marvel.concat(dc)
// console.log(x);

// another one 
// Merge Using  .... Spread Operator const
const all_heros=[...marvel,...dc] 
// console.log(all_heros);

// Convert into entire one array using .flat(Infinity) Method  
const new_Array=[1,2,3,[4,5,6],7,[7,8,9],[4,5]]

const real_array=new_Array.flat(Infinity)
// console.log(real_array); 
//  [
//     1, 2, 3, 4, 5,
//     6, 7, 7, 8, 9,
//     4, 5
//   ]

// Split it out in one array 
let xx =Array.isArray("Tushar")  // cheaking  where value is array or not
// console.log(xx);
//.from method convert string into array
let xy=Array.from("Tejas")

// console.log(xy);


// elge case remember 
// if you want to convert object value it will give you empty array  []

// let m= Array.from({
//     "name":"Tejas",
//      "age":18
// })

// console.log(m);   []

// Converting values into Array using arry.of() method
let A =100
let B=200
let C=300

let con=Array.of(A,B,C)
// console.log(con);  [ 100, 200, 300 ]

