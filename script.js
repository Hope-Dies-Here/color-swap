const boxes = document.querySelectorAll(".box");
const power = document.querySelector("#toggle-image");
const status = document.querySelector("#toggle-text");
const info = document.querySelector("#info");
const infoText = document.querySelector("#info-text");
const err = document.querySelector("#err-msg");
import { colors } from "./colors.js";

//screen controller
let canSwap = true;
let timeoutId = false
power.addEventListener("click", () => {
  if (canSwap) {
    canSwap = false;
    status.innerText = "Off";
    status.style = "color: red;";
    power.src = "./src/off.png";
  } else {
    canSwap = true;
    status.innerText = "On";
    status.style = "color: green;";
    power.src = "./src/on.png";
  }
});

//color box's controller
boxes.forEach(box => {
  box.addEventListener("click", e => {
    if (canSwap) {
      if(timeoutId) clearTimeout(timeoutId)
      err.classList.remove("show-err")
      const color = colors[Math.floor(Math.random() * colors.length)];
      e.target.style = `background-color: ${color.hex};`;
    } else {
      if(timeoutId) clearTimeout(timeoutId)
      err.classList.add("show-err")
      timeoutId = setTimeout(function() {
        err.classList.remove("show-err")
      }, 1500);
    }
  });
});

//info 
let showInfo = false;
info.addEventListener("click", () => {
  if (!showInfo) {
    showInfo = true;
    infoText.classList.add("displayInfo")
  } else {
    showInfo = false;
    infoText.classList.remove("displayInfo")
  }
});
