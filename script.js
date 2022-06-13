const numbers = document.querySelectorAll(".number");
const calculatorScreen = document.querySelector(".calculator-screen");
const operators = document.querySelectorAll(".operator");
const equalSign = document.querySelector(".equal-sign");
const clearBtn = document.querySelector(".all-clear");
const decimal = document.querySelector(".decimal");

let prevNumber = "";
let calculationOperator = "";
let currentNumber = "0";

const updateScreen = (number) => {
  calculatorScreen.value = number;
};

numbers.forEach((number) => {
  number.addEventListener("click", (e) => {
    inputNumber(e.target.value);
    updateScreen(currentNumber);
  });
});

operators.forEach((operator) => {
  operator.addEventListener("click", (e) => {
    inputOperator(e.target.value);
  });
});

equalSign.addEventListener("click", () => {
  calculate();
  updateScreen(currentNumber);
});

clearBtn.addEventListener("click", () => {
  clearAll();
  updateScreen(currentNumber);
});

decimal.addEventListener("click", (e) => {
  inputDecimal(e.target.value);
  updateScreen(currentNumber);
});

const inputNumber = (number) => {
  if (currentNumber === "0") {
    currentNumber = number;
  } else {
    currentNumber += number;
  }
};

const inputOperator = (operator) => {
  if (calculationOperator === "") {
    prevNumber = currentNumber;
  }
  calculationOperator = operator;
  currentNumber = "0";
};

const calculate = () => {
  let result = "";
  switch (calculationOperator) {
    case "+":
      result = parseFloat(prevNumber) + parseFloat(currentNumber);
      break;
    case "-":
      result = prevNumber - currentNumber;
      break;
    case "*":
      result = prevNumber * currentNumber;
      break;
    case "/":
      result = prevNumber / currentNumber;
      break;
    case "%":
      result = prevNumber / 100;
      break;
    default:
      break;
  }
  currentNumber = result;
  calculationOperator = "";
};

const clearAll = () => {
  prevNumber = "";
  calculationOperator = "";
  currentNumber = "0";
};

const inputDecimal = (dot) => {
  if (currentNumber.includes(".")) {
    return;
  }
  currentNumber += dot;
};
