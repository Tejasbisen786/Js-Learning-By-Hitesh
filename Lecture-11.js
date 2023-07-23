// **************Lecture-11: Array in Javascript************
// Array is a Object 
// const arr1=[1,2,3,4,5,6,4]
// const arr2=[1,23,,45,6,7 ]  //Array is a resizeable you can resizebale the size  of the array


// console.log(arr1[2]);   //Acccesing element using index number
// console.log(arr2[3]);
// two type  of 
// 1: Shallow copy - share refernce point
// 2: Deep Copy  - copy do not share with refrence point


// ****** Arrat Methods and Basics *******
const heros=["Superman","Junior-G","ironman","Spider-Man"]
// const arr2= new Array(1,3,4,5,6)

// console.log(heros[3]);
// console.log(arr2[2]);

// array methods
// arr2.push(3)  //adding the element
// // console.log(arr2);
// arr2.pop()
// arr2.pop()  // removing last element
// // console.log(arr2);
// arr2.unshift(45) // insert element at starting of array i.e index 0

// console.log(arr2);
// arr2.shift()  //Removing the  element which added previously 
// arr2.shift()
// console.log(arr2);

//  let x = heros.includes("Superman")   // cheack whether value Present or not 
//  console.log(x);
// console.log(arr2);
// let y = heros.indexOf("ironman")   // find the index value of value which present or not 
// console.log(y);

// Array join Method  : converting  into array to string
//   const numbers=[1,4,5,6,7,89,]
//   const new_Nummbers= numbers.join() 
// console.log(new_Nummbers);


// Slice and Splice Method

//slice : does not change in original array it store valued in another varable that intialised
// let s1=numbers.slice(1,3)  // SHow the given value till which passed in slice argument 
// console.log(s1);

// console.log(s1);
// splice
// let s2= numbers.splice(1,3)  // it change made in original array 
// console.log(s2);



