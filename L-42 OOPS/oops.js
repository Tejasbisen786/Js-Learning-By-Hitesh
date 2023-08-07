// ********Lecture 42 : OOPS In JS **********

// ***Object literal 

const user={
    username:"Tejas",
    Password:"1234",
    loginCount:9,
    signedIn:false,
    getuserdetails: function (){
        // console.log("got user details");
        // console.log(`username ${this.username}`);
        // console.log(this);
    }
}



// console.log(user.username);
// console.log(user.getuserdetails());

// console.log(this);


// **Constructor Function 

// const promise1= new Promise()
// const date = new Date()


function User(username,logincount,isLoggedin)
{
    this.username=username;
    this.loginCount=logincount;
    this.isLoggedin=isLoggedin;
    this.greeting= function greeting(){
        console.log(`Welcome  ${this.username}`);
    }
    
    return this
    
}

const userOne =User("Tejas",12,true)  // yaha override ho rhi value
const userTwo = User("Tushar",7,false)
console.log(userOne);
// userOne.constructor
// console.log(userTwo);

//New 
// :- empty object create hota hai | it will create the empty object 
//   :- Constructor functon called with the help of new keyword

const userOne1 = new User("Tejas",12,true)  // new instance dedo bhai
const userTwo2 = new User("Tushar",7,false)

// console.log(userOne1);
// console.log(userTwo2);

