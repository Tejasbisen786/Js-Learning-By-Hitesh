// ******L-40 Promise in js ******

// The promise object represents the eventual completion of
// an asynchonous and its resulting value

// **Three State in promise
// 1 pending
// 2 fulfield
// 3 rejecting

// creating a promise
const promise1 = new Promise(function (resolve, reject) {
  //do async task
  //Db Calls
  //Cryptography task
  //Network Calls
  setTimeout(function () {
    // console.log("async Task is Complete");
    resolve();
  }, 1000);
});

//consuming promise

promise1.then(function () {
  // console.log("Promised  Consumed");
});

//basic Consumation of promise
new Promise(function (resolve, reject) {
  setTimeout(function () {
    // console.log("Async Task 2 ");
    resolve();
  }, 1000);
}).then(function () {
  // console.log("Async Two Resolved");
});

// **getting data using promise  data consumetion

const promise3 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({ username: "Tejas", email: "bisentejas@gmail.com" });
  }, 1000);
});

promise3.then(function (user) {
  console.log(user);
});

// ***Chaining of promose 4
const promise4 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let erors = true;
    if (!erors) {
      resolve({ username: "tejas", Pass: "123Tejas" });
    } else {
      reject("EROR Something went Wrong ");
    }
  }, 2000);
});

promise4
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch((error) => {
    console.log(error);
  }).finally(()=>{console.log("The Promise is either resolve or rejected ");})

//   *****promise 5 async await

const promise5 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let erors = true;
    if (!erors) {
      resolve({ username: "tejas", Pass: "123456" });
    } else {
      reject("EROR Something went Wrong ");
    }
  }, 2000);
});

async function consumefive() {
  try {
    const response = await promise5;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

consumefive();

async function getAllusers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    console.log(data);
  } catch (eror) {
    console.log(eror);
  }
}

getAllusers()

// ***.then .catch format

fetch("https://api.github.com/users/Tejasbisen786")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((eror) => {
    console.log(eror);
  });
