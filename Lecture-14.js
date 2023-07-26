// ************ Objects Part II in Javascript  ************


// const tinderuser=new Object()  // Singleton Object
// Non- singleton Object
const tinderUser = {};
tinderUser.id = "123abc";
tinderUser.Name = "Tejas";
tinderUser.isLoggedin = false;

// console.log(tinderUser);

const regularStudent = {
  email: "bisenW@gmail.com",
  fullName: {
    userfullName: {
      Fname: "Tejas",
      Lname: "Bisen",
    },
  },
};

// optional Chaining ?  if value is found or cheaking value
// is present or not
// console.log(regularStudent.fullName.userfullName);

//  merging two differnt object
const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "c", 4: "d" };
const obj3 = { 5: "e", 6: "f" };

// object.assign({},x1,x2)    Method For Using Merging the Object in a single object
const obj5 = Object.assign({}, obj1, obj2, obj3);
// const obj3={obj1, obj2}     // same problem like array
// console.log(obj3);
// console.log(obj5);

// Using Spread Operator  merge the object in a single objects
const objx = { ...obj1, ...obj2, ...obj3 };
// console.log(objx);

const users = [
  {
    id: 1,
    email: "h@gmail.com",
  },
  {
    id: 2,
    email: "m@gmail.com",
  },
  {
    id: 3,
    email: "k@gmail.com",
  },
];

console.log(users[0].email);

// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty("Names"));  // value present or not  cheaking


