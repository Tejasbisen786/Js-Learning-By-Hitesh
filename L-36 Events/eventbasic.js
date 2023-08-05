// javascript sequencly program run hote hai
// *****Events ******

// attachEvent()
//Jquery- onEvent

//type
//timestamp
//defaultPrevented // currentTarget
//target // toElement // srcElement
// ClientX, // Offset // ScreenX // ScreenY / ClientY
//altkey // ctrlkey // shiftkey , keyCode

// document.getElementById('nature1').onclick=function(){
//     alert("First Image Click ")
// }

// ** Best Pracise **
// **first Approch

// const one = document.getElementById('nature1')
// one.addEventListener('click',function(){
//     alert("This is First Image")
// })

// **Second Approch
document.getElementById("nature1").addEventListener(
  "click",
  function (e) {
    // console.log(e);
  },
  false
);

// **Event Propagation  false true

// Event Bubbling : false  most used
// Event Capturing : true

document.getElementById("images").addEventListener(
  "click",
  function (e) {
    // console.log("Click Inside the u");
  },
  true
);

document.getElementById("nature1").addEventListener(
  "click",
  function (e) {
    // console.log("First Image Clicked");
    e.stopPropagation();
  },
  true
);

// **event Bubling And Vicevesa in the case of Event Capturing
// First Image Clicked
//   Click Inside the u

// eventPreventdefault

// document.getElementById('google').addEventListener('click',function(e){
//     e.preventDefault()
//     e.stopPropagation()
//     console.log("Google Clicked");

// })

