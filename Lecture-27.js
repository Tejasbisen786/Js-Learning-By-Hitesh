// ****Lecture-27 : Filter Map And reduce in JS****

// For each
// it will not return the value
// const coding = ["js", "cpp", "java", "ruby", "python", "c"];

// const values= coding.forEach((item)=>{
//  console.log(item);
//  return item
// })
// console.log(values);

// **Filter Method
// it return the value and stored in variable
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// {} used return statement if used
// const newnums= myNums.filter((num)=> {
//     return num>6
// })
// console.log(newnums);

// using For each Same Operation
// const newnums = [];

// myNums.forEach((num) => {
//   if (num > 5) {
//     newnums.push(num);
//   }
// });

// console.log(newnums);

// const books = [
//   {
//     title: "Book1",
//     genre: "Sciece",
//     publish: 1992,
//   },
//   {
//     title: "Book2",
//     genre: "Fiction",
//     publish: 1994,
//   },
//   {
//     title: "Book3",
//     genre: "Fiction",
//     publish: 1997,
//   },
//   {
//     title: "Book4",
//     genre: "Fiction",
//     publish: 1992,
//   },
//   {
//     title: "Book5",
//     genre: "Romance",
//     publish: 1992,
//   },
// ];

// const userBooks = books.filter((bk) => bk.genre === "Fiction");
// const userBooks1 = books.filter((bk1) => {
//   return bk1.publish > 1995 && bk1.genre==="Fiction";});
// console.log(userBooks1);

//**Map Method

const myNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newNum = myNumber.map((num) => {
  return num + 20;
});
// console.log(newNum);

const added = [];
const add20 = myNumber.forEach((num) => {
  num = num + 20;
  //    console.log(num);
  added.push(num);
});
// console.log(added);

// Chaining Method
//  addding more function
const newNums = myNumber
  .map((num) => num * 20)
  .map((num) => num + 10)
  .filter((num) => num >= 100);
// console.log(newNums);

// ** Reduce Method

const Numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const intaVal = 0;

// const myTotal = Numbers.reduce(function (accc, cuval) {
//   console.log(` acc: ${accc} and curVal: ${cuval}`);
//   return accc + cuval;
// }, 0);

// const myTotal = Numbers.reduce((acc, curval) => acc + curval, 0);

// console.log(myTotal);

// const resultReduce= Numbers.reduce((intaVal,currentvalue)=>)

const shopingCart = [
  {
    itemName: "js",
    Price: 2999,
  },
  {
    itemName: "python",
    Price: 2999,
  },
  {
    itemName: "Machine Learning",
    Price: 299,
  },
  {
    itemName: "C++",
    Price: 4599,
  },
  {
    itemName: "Web Dev",
    Price: 5699,
  },
];

mytotal = shopingCart.reduce((acc, item) => acc + item.Price, 0);


console.log("Price To Pay: " + mytotal);