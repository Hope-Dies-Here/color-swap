const boxes = document.querySelectorAll(".box");
const power = document.querySelector("#toggle-image");
const status = document.querySelector("#toggle-text");
const info = document.querySelector("#info");
const infoText = document.querySelector("#info-text");
import { colors } from "./colors.js";

//screen controller
let canSwap = true;
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
      console.log(e.target);
      const color = colors[Math.floor(Math.random() * colors.length)];
      e.target.style = `background-color: ${color.hex};`;
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
