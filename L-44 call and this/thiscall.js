// *****Lecture 44: this and call in javascript ********

// **This 
// this:- Repesent the Current Exeecution context 

//  Global Execution reffred : this keyword 
//    in browser : it refferd the window Object
//    in node : it reffred to the {} object 
// ****Call


function setUserName(username){
    // Complex calculation 
    this.username=username
    console.log("called");
}


function createUser(username,email,pass){
    setUserName.call(this, username)
    this.email=email
    this.pass=pass
}

const chai = new createUser("Chai","chai@gmail.com","1234")
console.log(chai);