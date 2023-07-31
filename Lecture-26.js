// *****Lecture-26: High Order Array Loops in js *****

//  For in || For of || For each Loop

// **For-Of loop

// ["","",""]
// [{},{},{}]

const arr = [1, 2, 3, 4, 5, 6];

const arr1 = {
  userName: "tejas",
  Price: 999,
  isLoggedIn: true,
};

// console.log(arr1);
// syntax

// for (const x of arr1)
// {
//     console.log(x);
// }

// for (const i of arr) {
//   console.log(i);
// }

// const greetings="Tejas Bisen"
// for (const greet of greetings)
// {
//     console.log(`Each char is : ${greet}`);
// }

// **Maps

// maps hold key value pair
//consist unique value

const map = new Map();

map.set("Sta", "Maharashtra");
map.set("Stat", "Madhya-Pradesh");
map.set("State", "Goa");

// console.log(map);

// for (const [key,value] of map) {

//     console.log(key , ':-', value);

// }

// const obj1 = {
//     userName: "bisen_tejas_",
//     Price: 999,
//     isLoggedIn: true,
//   };

//   for (const [key ,value] of obj1) {
//     console.log(key , ':-', value)
//   }

// **For in Loop **

// const obj1 = {
//   userName: "bisen_tejas_",
//   Price: 999,
//   isLoggedIn: true,
// };

// for (const key in obj1) {
//   console.log(`${key} SHortcut is for ${obj1[key]}`);
// }

// const Programming =["js","java","cpp"]

// for (const key in Programming) {

//     // console.log(key ," :" ,Programming[key]);
// }

// const map2 = new Map();

// map.set("US", "United State of America");
// map.set("IN", "India");
// map.set("CND", "Canada");

// for (const key in map2) {
//   console.log(key);
// }

// ** For Array : For Of Loop
// ** For Object: FOr In Loop

// *@** For Each Loop ***@

const coding = ["js", "cpp", "java", "ruby", "python", "c"];

// using Arrow function
// coding.forEach((item) => {
//   console.log(item);
// });

// Basic
// coding.forEach(function (items){
//     console.log(items);
// })

// function printMe(item){
//     console.log(item);
// }
// printMe(coding)

// coding.forEach(printMe)

// coding.forEach((items,index,arr)=>{

//     console.log(items ,index,arr);

// })

const myCoding = [
  {
    langName: "js",
    langfileName: "js",
  },
  {
    langName: "java",
    langfileName: "java",
  },
  {
    langName: "python",
    langfileName: "python",
  },
];

myCoding.forEach((item)=>{
    console.log(item.langfileName);

})