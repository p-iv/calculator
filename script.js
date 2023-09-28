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

function clearBar() {
  currentNumber.textContent = "";
  previosNumber.textContent = "";
  mathSign.textContent = "";
}

function backNum() {}

function showResult() {
  let li = document.createElement("li");
  let a = Number(currentNumber.textContent);
  let b = Number(previosNumber.textContent);
  let c = 0;

  switch (mathSign.textContent) {
    case "+":
      result += a + b;
      break;

    case "-":
      result += b - a;
      break;

    case "/":
      result += b / a;
      break;

    case "*":
      result += a * b;
      break;
    default:
  }

  li.textContent +=
    previosNumber.textContent +
    " " +
    mathSign.textContent +
    " " +
    currentNumber.textContent +
    "=" +
    result;

  history_bar.appendChild(li);

  previosNumber.textContent = "";
  mathSign.textContent = "";
  currentNumber.textContent = "";
  currentNumber.textContent += result;
  result = "";
}

number.forEach((button) => button.addEventListener("click", showNumber));

operator.forEach((button) => button.addEventListener("click", operate));

clear.addEventListener("click", function () {
  clearBar();
});

back.addEventListener("click", function () {
  backNum();
});

equal.addEventListener("click", function () {
  showResult();
});
