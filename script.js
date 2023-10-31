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

function fillDisplay() {
  const buttons = document.querySelectorAll("button");
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

fillDisplay();
clear();
