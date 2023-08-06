const randomColor = function () {
  const hex = "0123456789ABCDEF";
  let color = "#";

  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};

const start = document.querySelector("#start");
const stops = document.querySelector("#stop");
let intervid;
const startChange = function () {
  if (!intervid) {  // edge case memory optimization
    intervid = setInterval(chnagecolor, 1000);
  }
  function chnagecolor() {
    document.body.style.backgroundColor = randomColor();
  }
};

const stopChange = function () {
  clearInterval(intervid);
  intervid = null;  //edge case
};

start.addEventListener("click", startChange);
stops.addEventListener("click", stopChange);
