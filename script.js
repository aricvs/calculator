// global DOM elements
const display = document.querySelector(".display-text");
const digitBtns = document.querySelectorAll(".digit");
const operatorBtns = document.querySelectorAll(".operator");
const equalsBtn = document.querySelector(".equals");
const clearBtn = document.querySelector(".clear");

// global variables used in operations
let currentNumber;
let currentOperator = "";
let nextNumber;
let numberToggle = "current";

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

// makes clicked digits show up on the display, converts them to numbers as well
// TODO: log clicked digits to number variables
// TODO: add a way to detect current number and assign to next number
// TODO: limit amount of digits to not overflow display size
function clickDigitBtn() {
  digitBtns.forEach((digit) => {
    digit.addEventListener("click", () => {
      if (numberToggle === "current") {
        display.textContent += Number(digit.textContent);
        currentNumber = Number(display.textContent);
      } else {
        display.textContent = "";
        display.textContent += Number(digit.textContent);
        nextNumber = Number(display.textContent);
      }
    });
  });
}

// function to choose the desired operator
function clickOperatorBtn() {
  operatorBtns.forEach((operator) => {
    operator.addEventListener("click", () => {
      // if an operator has been chosen previously, it will run the cached operation
      if (currentOperator !== "") {
        currentNumber = operate(currentNumber, currentOperator, nextNumber);
        display.textContent = currentNumber;
      } else {
        currentOperator = operator.textContent;
        numberToggle = "next";
      }
    });
  });
}

// runs the operate function on the current numbers/operator and shows it on display
function clickEqualsBtn() {
  equalsBtn.addEventListener("click", () => {
    display.textContent = operate(currentNumber, currentOperator, nextNumber);
  });
}

clickDigitBtn();
clickOperatorBtn();
clickEqualsBtn();
