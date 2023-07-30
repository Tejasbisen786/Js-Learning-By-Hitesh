// ****Lecture-21: IIFE Immediately Invoked Function Expression

// Reuce the polution of global scope that's why we used iife
// Using IIFE

// Name IIFE
(function chai() {
  console.log("Db COnnected");
})();

  // chai()

  // Simple IIFE
  ((names)=>{
    console.log(`The Name is : ${names}`);
  })('Tejas')