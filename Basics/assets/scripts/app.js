const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

document.addEventListener('DOMContentLoaded', () => {
    userInput.focus();
});

// ` is called a template literal
// let calculationDescription = `(${defaultResult} + ${currentResult}) * 3 / 2 - 1`;

// Get the user input from the input field.
function getUserNumberInput() {
    // parseInt() converts a string to a number and  gives more control over the conversion
    // currentResult = currentResult + parseInt(userInput.value);
    // By adding the + in front of userInput.value, we are converting the string to a number.
    return +userInput.value;
}

// Create and write output to the window.
function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
    const calculationDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
    outputResult(currentResult, calculationDescription);
}

// Clear and focus the input field.
function clearAndFocus() {
    userInput.value = '';
    userInput.focus();
}

function logEntry(enteredNumber) {
    logEntries.push(enteredNumber);
    console.log(logEntries);
}

// Addition function.
function add() {
    const enteredNumber = getUserNumberInput();
    const intialResult = currentResult;
    currentResult += enteredNumber;
    createAndWriteOutput('+', intialResult, enteredNumber);    
    clearAndFocus();
    logEntry(enteredNumber);
}

// Subtract function.
function subtract() {
    const enteredNumber = getUserNumberInput();
    const intialResult = currentResult;
    currentResult -= enteredNumber;
    createAndWriteOutput('-', intialResult, enteredNumber);    
    clearAndFocus();
    logEntry(enteredNumber);
}

// Multiplication function.
function multiply() {
    const enteredNumber = getUserNumberInput();
    const intialResult = currentResult;
    currentResult *= enteredNumber;
    createAndWriteOutput('*', intialResult, enteredNumber);    
    clearAndFocus();
    logEntry(enteredNumber);
}

// Division function.
function divide() {
    const enteredNumber = getUserNumberInput();
    const intialResult = currentResult;
    currentResult /= enteredNumber;
    createAndWriteOutput('/', intialResult, enteredNumber);    
    clearAndFocus();
    logEntry(enteredNumber);
}

// Event listeners.
addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);