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
      if (display.textContent.length < 13) {
        display.textContent += btn.textContent;
      }
    });
  });
}

// assigns display number to num1 and clears the display
function clickOperatorBtn() {
  operatorBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      if (currentOperation.operator !== null) {
        currentOperation.num2 = Number(display.textContent);
        currentOperation.num1 = operate(
          currentOperation.num1,
          currentOperation.operator,
          currentOperation.num2
        );
        currentOperation.operator = btn.textContent;
        currentOperation.num2 = null;
        display.textContent = "";
      }

      if (currentOperation.operator === null) {
        currentOperation.operator = btn.textContent;
        currentOperation.num1 = Number(display.textContent);
        display.textContent = "";
      }
    });
  });
}

// assigns display value to num2 and run operate function on current values, displaying result value in visor
function clickEqualsBtn() {
  equalsBtn.addEventListener("click", () => {
    currentOperation.num2 = Number(display.textContent);
    display.textContent = operate(
      currentOperation.num1,
      currentOperation.operator,
      currentOperation.num2
    );
    currentOperation.num1 = display.textContent;
    currentOperation.operator = null;
    currentOperation.num2 = null;
  });
}

// clears display and resets global variables
function clickClearBtn() {
  clearBtn.addEventListener("click", () => {
    currentOperation = { num1: null, operator: null, num2: null };
    display.textContent = "";
  });
}

clickDigitBtn();
clickOperatorBtn();
clickEqualsBtn();
clickClearBtn();
