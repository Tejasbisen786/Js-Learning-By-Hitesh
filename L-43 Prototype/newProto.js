// ***** Example *****

// ** Stirng Exmaple
// let myName="Tejas        "
// let myChannel="chai           "
// console.log(myName.trim().length);
// console.log(myName.truelength);

let myHeros = ["thor", "spiderman"];

let heroPower = {
  thor: "Hammer",
  spiderman: "sling",

  getSpiderPower: function () {
    console.log(`Spidy Power is  ${this.spiderman}`);
  },
};


// custom defined prototype  

// Object.prototype.hitesh=function(){
//     console.log(`Hitesh is Present in all Objects`);
// }

// myHeros.hitesh()
// heroPower.hitesh()

// Giving prototype to special data type i.e array 
// Array.prototype.heyHItesh=function(){
//     console.log(`Hey Im Hitesh`);
// }

// myHeros.heyHItesh()
// heroPower.heyHItesh()

// ****Inheritance ********
 // prototype inheritance

const user={
    name:"Tejas",
    email:"tejas@gmail.com"
}
const Teacher= {
    makeVideo :true
}

const TeacherAsssist ={
    isavailable : false
}

const TaSupport ={
    makeAssignment :'js Assignment',
    fullTime:true,
    __proto__: TeacherAsssist
}

Teacher.__proto__=user



// modern Syntax  

Object.setPrototypeOf(TaSupport,Teacher)  

let anotherUserName='Tejas        '

String.prototype.trueLength=function(){

    // console.log(`${this}`);
    console.log(`True Length is : ${this.trim().length}`);
    
}
anotherUserName.trueLength()

"tejas".trueLength()
"icetea".trueLength()