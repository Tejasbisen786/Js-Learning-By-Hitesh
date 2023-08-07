// ****LEcture 41 : Fetch In javascript  *****

fetch("https://api.github.com/users/Tejasbisen786")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data.url);
  })
  .catch((eror) => console.log(eror));



// fetch("https://api.github.com/users/Tejasbisen786")
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((eror) => {
//     console.log(eror);
//   });
