"use strict";

const cancel = document.querySelector(".cancel");
const btnPlay = document.querySelector(".play");
const firstPlayerName = document.querySelector("#first-player");
const secondPlayerName = document.querySelector("#second-player");
const setTarget = document.querySelector("#Score");
const targetScore = document.querySelector(".target-score");

btnPlay.addEventListener("click", function () {
  if (firstPlayerName.value && secondPlayerName.value) {
    console.log(setTarget.value);
    if (setTarget.value) {
      targetScore.innerText = setTarget.value;
    } else {
      console.log(`provide score`);
    }
  } else {
    // btnPlay.classList.add("hidden");
    console.log("please enter both player Name");
    btnPlay.classList.add("hidden");

    const text = document.createTextNode("Enter Both players name");
    const element = document.getElementById("id");
    element.appendChild(text);
  }
});
