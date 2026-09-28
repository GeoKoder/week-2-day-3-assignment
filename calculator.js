const display = document.getElementById("display");

// State Variables
let currentNumber = 0;
let previousNumber = null;
let activeOperator = null;
let shouldResetScreen = false;
const MAX_CHARS = 10;

// Math Engine
function operate(operator, a, b) {
    let output;
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

    if (output === "Error") return "Error";

    // Format output to fit string bounds
    let stringResult = String(output);
    if (stringResult.length > MAX_CHARS && stringResult.includes(".")) {
        output = parseFloat(output.toFixed(4));
    }
    return output;
}
// Updates what the user sees on the screen.
function updateDisplay() {
    if (currentNumber.length > MAX_CHARS && currentNumber !== "Error") {
        display.value = Number(currentNumber).toExponential(4);
    } else {
        display.value = currentNumber;
    }
}

// Handles Number button clicks
function inputNumber(number) {
    if (shouldResetScreen) {
        currentNumber = number;
        shouldResetScreen = false;
    } else {
        if (currentNumber.length >= MAX_CHARS) return;
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

    if (currentNumber.length >= MAX_CHARS) return;
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

// Global Keyboard Support
document.addEventListener("keydown", (event) => {
    const key = event.key;

    // Direct mapping from key characters to logical fuinctions
    if (key >= "0" && key <= "9") {
        inputNumber(key);
    } else if (key === ".") {
        inputDecimal();
    } else if (key === "+" || key === "-" || key === "*" || key === "/") {
        inputOperator(key);
    } else if (key === "Enter" || key === "=") {
        event.preventDefault();
        calculate();
    } else if (key === "Escape" || key.toLowerCase() === "c") {
        clearDisplay();
    } else if (key === "Backspace") {
        event.preventDefault();
        if (shouldResetScreen || currentNumber === "Error") return;
        currentNumber = currentNumber.slice(0, -1);
        if (currentNumber === "" || currentNumber === "-") currentNumber = "0";
        updateDisplay();
    }
})
