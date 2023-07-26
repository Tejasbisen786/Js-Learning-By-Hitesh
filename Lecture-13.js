// ********** Objects in Depth in Javascript **************

// object  : Types OF Defining Object : 1: literals, Singleton , Constructor 

// Singleton made when construtor  defined 
// Object.create()  // singleton constructor

// Object Literal 

const tUser={
    nameof:"Tejas",
    fullNames:"Tejas Wasudeo Bisen",
    age:18,
    location:"GOndia",
    email:"bisentejas@gmail.com",
    isLoggedin: false,
    last_Login_Days:["Monday","Sunday"],
    // [mysum]: "mykey"   

}

const mysum=Symbol("key")
// console.log(typeof mysum);

// Accessing the Objects 
// console.log(tUser["email"]);
// console.log(tUser["fullNames"]);
// console.log(tUser["mysum"]); // string type but we want symobol type

// console.log(tUser.age)
// console.log(tUser.last_Login_Days)
// console.log(tUser.nameof)

//symbol DataType
// const new_user={
//     "FullName":"Tejas Wasudeo Bisen" 
// }
// // console.log(new_user.FullName);
// //Aceess Element
// // console.log(new_user.FullName);

// // Defining Symbol And do add into array and five me access into the Array

// // Defining Symbol
// const mysum=Symbol("key")
// a doing symbol into array

// const new_users={
//     [mysum]:"myKey"

// }

//Acessing 
// console.log( typeof new_users[mysum]);
// console.log(typeof mysum);


//Changing Objects Values

// console.log(new_user.FullName);
// new_user.FullName="Devid Akare"
// console.log(new_user.FullName);
// Looking The objects value jsuser.name
// console.log(JsUser);
// Object.freeze(new_user)

// new_user.FullName="Bisen Tejas"

// console.log(new_user.FullName);


//Function Inside Objects

// new_user.greeting=function()
// {

//     console.log("Good Morning");
// }
// new_user.greeting()


 

// tUser.nameof="Tejas Bisen Now"

// console.log(tUser);
// tUser.nameof="Tejas Bisen"
// console.log(tUser);

 //restrict To change the value in obejct by using freeze method 
// Object.freeze(tUser)

tUser.nameof="Tushar Bisen"

// console.log(tUser);
// Anonymus Function 
tUser.greeting=function()
{
    console.log("Hello Js User");
}
tUser.greeting2=function()
{
    console.log(`helloe my name is ${this.nameof}`);
}
console.log(tUser.greeting());
console.log(tUser.greeting2());