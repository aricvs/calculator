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

// TODO: don't let two operators be logged in a row
function fillDisplay() {
  const buttons = document.querySelectorAll(".non-equals");
  const display = document.querySelector(".display-text");
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      if (display.textContent.length < 13) {
        display.textContent += button.textContent;
      }
    });
  });
}

function clear() {
  const clearBtn = document.querySelector(".clear");
  const display = document.querySelector(".display-text");
  clearBtn.addEventListener("click", () => {
    display.textContent = "";
  });
}

function getResult() {
  const equalsBtn = document.querySelector(".equals");
  const display = document.querySelector(".display-text");
  equalsBtn.addEventListener("click", () => {
    console.log(display.textContent);
  });
}

fillDisplay();
getResult();
clear();
