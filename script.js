let total;
let operand;
let nextNumber;
let operation = [];
const display = document.querySelector(".display-text");

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

function digitClick() {
  const digitBtns = document.querySelectorAll(".digit");

  digitBtns.forEach((digit) => {
    digit.addEventListener("click", () => {
      display.textContent += digit.textContent;
    });
  });
}

function operatorClick() {
  const operatorBtns = document.querySelectorAll(".operator");

  operatorBtns.forEach((operand) => {
    operand.addEventListener("click", () => {
      operation.push(Number(display.textContent));
      operation.push(operand.textContent);
      display.textContent = "";
    });
  });
}

digitClick();
operatorClick();
