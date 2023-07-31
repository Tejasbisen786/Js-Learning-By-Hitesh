// **** Lecture -24 : For loop with break and continue in j  *******
// **Loop ( iterations)**

// FOR LOOP
// const array=[12,34,5,67,8,97,6,4,3]
// for (let i = 0; i < 10; i++) {
//     const element = i;
//     if(element==5){

//         console.log("5 is best Number");
//     }
// console.log(element);
// console.log(array[i]);
//     for (let j = 0; j <=10; j++) {
//         const element = j;
//         console.log(element);

//     }

// }

for (let i = 1; i <= 10; i++) {
  //   console.log(`outer loop value : ${i}`);
  for (let j = 1; j <= 10; j++) {
    // console.log(i + '*' + j + ' = ' + i*j);
    //    console.log(`Inner Loop: ${j} nd inner loop ${i} `);
  }
}

// console.log(elemenpt);

const myArray = ["Tejas", "Tushar", "Bisen"];

// console.log(myArray.length);
for (let index = 0; index < myArray.length; index++) {
  const element = myArray[index];

  //   console.log(element);
}

// Keyword
// break and continue


// *Break
// for (let index = 1; index <= 20; index++) {
//   if (index == 5) {
//     console.log(` detected 5 `);
//     break
//   }
//   console.log(`Value of i is ${index}`);
// }

  //Continue

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
      console.log(` detected 5 `);
      continue
    }
    console.log(`Value of i is ${index}`);
  }
  