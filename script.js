let currentOperation = {};

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

function operate(operator, num1, num2) {
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

// TODO: add a toggle to check if it's num1 or num2, maybe globalize it
function fillDisplayDigits() {
  const buttons = document.querySelectorAll(".digit");
  let display = document.querySelector(".display-text");
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      if (display.textContent.length < 13) {
        display.textContent += button.textContent;
      }
    });
  });
}

function fillDisplayOperator() {
  const buttons = document.querySelectorAll(".operator");
  let display = document.querySelector(".display-text");
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      currentOperation.num1 = Number(display.textContent);
      currentOperation.operator = button.textContent;
      console.log(currentOperation);
    });
  });
}

function clear() {
  let display = document.querySelector(".display-text");
  display.textContent = "";
  currentOperation = {};
}

function clearPress() {
  const clearBtn = document.querySelector(".clear");
  let display = document.querySelector(".display-text");
  clearBtn.addEventListener("click", () => {
    clear();
  });
}

function getResult() {
  const equalsBtn = document.querySelector(".equals");
  let display = document.querySelector(".display-text");
  equalsBtn.addEventListener("click", () => {
    console.log(display.textContent);
  });
}

fillDisplayDigits();
fillDisplayOperator();
getResult();
clearPress();
