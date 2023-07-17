// ************* Lecture-10 : Date And Time in Js *********
// Dates

let d=new Date()   //Return a Date
// console.log(d);
// date Convert into the String using toString method

// console.log(d.toString());
// console.log(d.toDateString());

// console.log(d.toLocaleString());


let myCreatedDate= new Date();

// console.log(myCreatedDate.toString());


let newDate =new Date(2023,0,23,5,3)

// console.log(newDate.toLocaleString());

let getDate= new Date("01-14-2023")
// console.log(getDate.toString());

// TimesStamps 

let ts = Date.now();
// console.log(ts/1000);

// ms to  Second Conversion 

const ms=Date.now()/1000
// console.log(Math.floor(ms/));

// let dt= Date.getTime();
// console.log(dt);

let ex=new Date();
// console.log(ex.getTime());
// console.log(ex.getDay());
// console.log(ex.getMonth());
// console.log(ex.getHours());
// console.log(ex.getMonth());


// imp custom data property for date 
let x=ex.toLocaleString('default',{
    weekday:"long",
    // timeZone:"Delhi,Kolkata"
})

console.log(x);