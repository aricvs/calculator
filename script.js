// global DOM elements
const display = document.querySelector(".display-text");
const digitBtns = document.querySelectorAll(".digit");
const operatorBtns = document.querySelectorAll(".operator");
const equalsBtn = document.querySelector(".equals");
const clearBtn = document.querySelector(".clear");

// global variables of operations
let currentOperation = { num1: null, operator: null, num2: null };

// basic operation functions
function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  if (num1 === 0 || num2 === 0) {
    return "Really?";
  }
  return num1 / num2;
}

// function to execute the desired operation with two numbers and an operator in between
function operate(num1, operator, num2) {
  if (operator === "+") {
    return add(num1, num2);
  }
  if (operator === "-") {
    return subtract(num1, num2);
  }
  if (operator === "*") {
    return multiply(num1, num2);
  }
  if (operator === "/") {
    return divide(num1, num2);
  }
}

// function to display the typed numbers
function clickDigitBtn() {
  digitBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      display.textContent += btn.textContent;
    });
  });
}

clickDigitBtn();
