// ********** Lecture -7 : Stack And Heap Memeory in JS **********
// stack memory : got copy 
// Heap memeroy : got reference 


// stack example in which the changes made in data copy not in original data cause 
// it take copy 

// let myName="Tejas Bisen"

// let NewName=myName
// NewName="Tushar Bisen";

// console.log(myName);
// console.log(NewName);


// Heap example in which the change is actual made in original data cause it take refernce

// let userone={
//     email:"bisentejas@gmail.com",
//     upi:"9834339517@ybl"
// }
// let userTwo= userone;

//try to modify info in userTwo

// userTwo.email="tejasbisen@gmail.com";

// console.log(userone);
// console.log(userTwo);