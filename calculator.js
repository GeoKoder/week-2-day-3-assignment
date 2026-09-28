const display = document.getElementById("display");

// State Variables
let currentNumber = 0;
let previousNumber = null;
let activeOperator = null;
let shouldResetScreen = false;

// Math Engine
function operate(operator, a, b) {
    switch(operator) {
        case "+":
            return a + b;
        case "-":
            return a - b;
        case "*":
            return a * b;
        case "/":
            return b === 0? "Error" : a / b;
        default: return b;
    }
}
// Updates what the user sees on the screen.
function updateDisplay() {
    display.value = currentNumber;
}

// Handles Number button clicks
function inputNumber(number) {
    if (shouldResetScreen) {
        currentNumber = number;
        shouldResetScreen = false;
    } else {
        currentNumber = currentNumber === "0" ? number : currentNumber + number;
    }
    updateDisplay();
}

// Handles Decimal points
function inputDecimal() {
    if (shouldResetScreen) {
        currentNumber = "0.";
        shouldResetScreen = false;
        updateDisplay();
        return;
    }

    // Prevents adding a second decimal
    if (!currentNumber.includes('.')) {
        currentNumber += '.';
    }
    updateDisplay();
}

// Handles chain operations
function inputOperator(nextOperator) {
    const inputValue = parseFloat(currentNumber);

    // Calculation of current operation before moving on
    if (activeOperator && !shouldResetScreen) {
        const result = operate(activeOperator, previousNumber, inputValue);
        currentNumber = String(result);
        previousNumber = result;
        updateDisplay();
    } else {
        previousNumber = inputValue;
    }

    shouldResetScreen = true;
    activeOperator = nextOperator;
}

// Handles the Equals Button
function calculate() {
    if (!activeOperator || shouldResetScreen) return;

    const inputValue = parseFloat(currentNumber);
    const result = operate(activeOperator, previousNumber, inputValue);

    currentNumber = String(result);
    previousNumber = null;
    activeOperator = null;
    shouldResetScreen = true;
    updateDisplay();
}

function clearDisplay() {
    currentNumber = "0";
    previousNumber = null;
    activeOperator = null;
    shouldResetScreen = false;
    updateDisplay();
}