"use strict";

const numbers = document.querySelectorAll(".number");
const calculatorScreen = document.querySelector(".calculator-screen");
const operators = document.querySelectorAll(".operator");
const equalSign = document.querySelector(".equal-sign");
const clearBtn = document.querySelector(".all-clear");
const decimal = document.querySelector(".decimal");

const updateScreen = (number) => {
  calculatorScreen.value = number;
};

let prevNumber = "";
let calculationOperator = "";
let currentNumber = '0';

const inputNumber = (number) => {
  if (currentNumber === "0") {
    currentNumber = number;
  } else {
    currentNumber += number;
  }
};

numbers.forEach((number) => {
  number.addEventListener("click", (event) => {
    inputNumber(event.target.value);
    updateScreen(currentNumber);
  });
});

operators.forEach((operator) => {
  operator.addEventListener("click", (event) => {
    inputOperator(event.target.value);
    updateScreen(calculationOperator);  
  });
});

const inputOperator = (operator) => {
  if (calculationOperator === "") {
    prevNumber = currentNumber;
  }
  calculationOperator = operator;
  currentNumber = "0";
};

equalSign.addEventListener("click", () => {
  calculate();
  updateScreen(currentNumber);
});

const calculate = () => {
  let result = "";

  switch (calculationOperator) {
    case "+":
      result = parseFloat(prevNumber) + parseFloat(currentNumber);
      break;
    case "-":
      result = parseFloat(prevNumber) - parseFloat(currentNumber);
      break;
    case "*":
      result = parseFloat(prevNumber) * parseFloat(currentNumber);
      break;
    case "/":
      result = parseFloat(prevNumber) / parseFloat(currentNumber);
      break;
    case "%":
      result = parseFloat(prevNumber/100);
      break;

    default:
      break;
  }

  currentNumber = result;
  calculationOperator = "";
};

clearBtn.addEventListener("click", () => {
    clearAll();
    updateScreen(currentNumber);
});

const clearAll = () => {
    prevNumber = "";
    calculationOperator = "";
    currentNumber = '0';
};

const inputDecimal = (dot) =>{
    if(currentNumber.includes('.')){
        return;
    }
    currentNumber += dot;
}

decimal.addEventListener('click', (event) => {
    inputDecimal(event.target.value);
    updateScreen(currentNumber);
});