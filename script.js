let currentOperation = { num1: 0, operator: "", num2: 0 };
let numberToggle = "numberOne";

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

function pressDigitBtn() {
  const digitBtns = document.querySelectorAll(".digit");
  const display = document.querySelector(".display-text");

  digitBtns.forEach((button) => {
    button.addEventListener("click", () => {
      display.textContent += button.textContent;
      if (numberToggle === "numberOne") {
        currentOperation.num1 = Number(display.textContent);
      }
      if (numberToggle === "numberTwo") {
        currentOperation.num2 = Number(display.textContent);
      }
    });
  });
}

function pressOperationBtn() {
  const operationBtns = document.querySelectorAll(".operator");
  const display = document.querySelector(".display-text");

  operationBtns.forEach((button) => {
    button.addEventListener("click", () => {
      currentOperation.operator = button.textContent;
      display.textContent = "";
      numberToggle = "numberTwo";
    });
  });
}

function pressEqualBtn() {
  const equalBtn = document.querySelector(".equals");
  const display = document.querySelector(".display-text");
  equalBtn.addEventListener("click", () => {
    const result = operate(
      currentOperation.operator,
      currentOperation.num1,
      currentOperation.num2
    );
    display.textContent = result;
    currentOperation.num1 = Number(display.textContent);
  });
}

function pressClearBtn() {
  const clearBtn = document.querySelector(".clear");
  clearBtn.addEventListener("click", () => {
    document.querySelector(".display-text").textContent = "";
    numberToggle = "numberOne";
    currentOperation = { num1: 0, operator: "", num2: 0 };
  });
}

pressDigitBtn();
pressOperationBtn();
pressEqualBtn();
pressClearBtn();
