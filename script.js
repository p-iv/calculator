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

const clear_history = document.querySelector(".clear-history");

let result = "";

function showNumber() {
  if (this.textContent === "." && currentNumber.textContent.includes("."))
    return;
  currentNumber.textContent += this.textContent;

  saveData();
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
  saveData();
}

function clearBar() {
  currentNumber.textContent = "";
  previosNumber.textContent = "";
  mathSign.textContent = "";
  saveData();
}

function showResult() {
  let li = document.createElement("li");
  let a = Number(currentNumber.textContent);
  let b = Number(previosNumber.textContent);

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
    case "^":
      result += b ** a;
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
  saveData();
}

function clearHistory() {
  history_bar.innerHTML = "";
}

function saveData() {
  localStorage.setItem("data", history_bar.innerHTML);
}

function showData() {
  history_bar.innerHTML = localStorage.getItem("data");
}

showData();

number.forEach((button) => button.addEventListener("click", showNumber));

operator.forEach((button) => button.addEventListener("click", operate));

clear.addEventListener("click", clearBar);

equal.addEventListener("click", showResult);

clear_history.addEventListener("click", clearHistory);
