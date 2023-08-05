const inputBox = document.querySelector("#textinput");
const button = document.querySelector("#but");

button.addEventListener("click", function () {
 

  const randomNum = parseInt(Math.random() * 100 + 1);
  inputBox.innerHTML = `<span id="textinput">${randomNum}</span>
    `;
});
