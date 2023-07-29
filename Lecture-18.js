// ********* Lecture-17: Global And Local Scope ********

// let var const
{} // Defined The Scope

// var c=300; // Global Scope

// Block Scope

let a = 300; // Global Scope
if (true) {
  let a = 10; // Block Scope
  const b = 20;

  console.log("Innner :", a);
}

// console.log(a);
// console.log(b);
// console.log(c);
// console.log(a);

// **** Remember
  // Scope Are differ in the node environment
//    and browser console environment 

