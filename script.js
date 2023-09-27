"use strict";

const currentNumber = document.querySelector(".number-bar");

const previosNumber = document.querySelector(".previos-number");

const mathSign = document.querySelector(".math-sign");

const number = document.querySelectorAll(".number");

const operator = document.querySelectorAll(".operator");

const clear = document.querySelector(".remove");

const back = document.querySelector(".back");

const equal = document.querySelector(".equal");

const history_bar = document.querySelector(".history-bar");

let result = "";

function showNumber() {
  currentNumber.textContent += this.textContent;
}

function operate() {
  if (currentNumber.textContent === "" && this.textContent === "-") {
    currentNumber.textContent = "-";
    return;
  } else if (currentNumber.textContent === "") {
    return;
  }

  if (mathSign.textContent !== "") {
    showResult();
  }

  previosNumber.textContent += currentNumber.textContent;
  mathSign.innerHTML += this.textContent;
  currentNumber.textContent = "";
}

number.forEach((button) => button.addEventListener("click", showNumber));

operator.forEach((button) => button.addEventListener("click", operate));

clear.addEventListener("click", function () {
  clear();
});

back.addEventListener("click", function () {
  back();
});

equal.addEventListener("click", function () {
  showResult();
});
